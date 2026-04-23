import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

/* ── Brand palette ── */
const DARK = '#020c1a';
const BRAND_BLUE = '#1428C9';
const BLUE_MID = '#3B5FFF';
const BLUE_LIGHT = '#6B8CFF';
const BLUE_GLOW = '#A5B4FC';

/* ── Particle config ── */
const PARTICLE_COUNT = 280;
const SMOKE_COLORS = [BRAND_BLUE, BLUE_MID, BLUE_LIGHT, BLUE_GLOW, '#ffffff'];

/* ── Helpers ── */
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

/* ── Smoke Particle class ── */
class SmokeParticle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.reset(true);
  }

  reset(initial = false) {
    const cx = this.w / 2;
    const cy = this.h / 2;
    // Start from edges/random positions
    const angle = rand(0, Math.PI * 2);
    const dist = rand(this.w * 0.4, this.w * 0.8);
    this.x = cx + Math.cos(angle) * dist;
    this.y = cy + Math.sin(angle) * dist;
    this.originX = this.x;
    this.originY = this.y;
    this.targetX = cx + rand(-60, 60);
    this.targetY = cy + rand(-40, 40);
    this.size = rand(20, 80);
    this.opacity = rand(0.02, 0.12);
    this.maxOpacity = rand(0.08, 0.25);
    const c = hexToRgb(pick(SMOKE_COLORS));
    this.r = c.r;
    this.g = c.g;
    this.b = c.b;
    this.vx = 0;
    this.vy = 0;
    this.phase = 'gather'; // gather → hold → blast
    this.gatherSpeed = rand(0.008, 0.025);
    this.turbulence = rand(0.3, 1.5);
    this.turbOffset = rand(0, 100);
    this.rotation = rand(0, Math.PI * 2);
    this.rotSpeed = rand(-0.02, 0.02);
    this.blastAngle = 0;
    this.blastSpeed = 0;
    this.life = 1;
    if (initial) {
      this.opacity = 0;
      this.fadeInDelay = rand(0, 0.6);
    }
  }

  gather(t) {
    // Move toward center with turbulence
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const turbX = Math.sin(t * 2 + this.turbOffset) * this.turbulence;
    const turbY = Math.cos(t * 2.5 + this.turbOffset * 1.3) * this.turbulence;
    this.x += dx * this.gatherSpeed + turbX;
    this.y += dy * this.gatherSpeed + turbY;
    this.rotation += this.rotSpeed;
    // Fade in
    if (this.opacity < this.maxOpacity) {
      this.opacity = Math.min(this.maxOpacity, this.opacity + 0.003);
    }
    // Shrink as gathering
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      this.size = Math.max(8, this.size * 0.998);
      this.opacity = Math.min(this.maxOpacity * 1.5, this.opacity * 1.002);
    }
  }

  blast(t) {
    this.x += Math.cos(this.blastAngle) * this.blastSpeed;
    this.y += Math.sin(this.blastAngle) * this.blastSpeed;
    this.blastSpeed *= 0.97;
    this.size *= 1.02;
    this.opacity *= 0.96;
    this.rotation += this.rotSpeed * 3;
  }

  draw(ctx) {
    if (this.opacity < 0.005) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;
    // Radial gradient for soft smoke look
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    grad.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.6)`);
    grad.addColorStop(0.4, `rgba(${this.r},${this.g},${this.b},0.2)`);
    grad.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/* ── Main Component ── */
export default function LogoIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const flashRef = useRef(null);
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoGlowRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);
  const [phase, setPhase] = useState('smoke'); // smoke → blast → reveal → done
  const startTimeRef = useRef(null);

  /* ── Init particles ── */
  const initParticles = useCallback((w, h) => {
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new SmokeParticle(w, h));
    }
    particlesRef.current = particles;
  }, []);

  /* ── Canvas animation loop ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    initParticles(w, h);
    startTimeRef.current = performance.now();

    let blastTriggered = false;

    const animate = (now) => {
      const t = (now - startTimeRef.current) / 1000;
      ctx.clearRect(0, 0, w, h);

      // Dark background with subtle gradient
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.6);
      bgGrad.addColorStop(0, '#081030');
      bgGrad.addColorStop(1, DARK);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Phase timing
      if (t > 2.8 && !blastTriggered) {
        blastTriggered = true;
        // Trigger blast
        const cx = w / 2;
        const cy = h / 2;
        particles.forEach(p => {
          p.phase = 'blast';
          p.blastAngle = Math.atan2(p.y - cy, p.x - cx) + rand(-0.4, 0.4);
          p.blastSpeed = rand(8, 30);
        });
        setPhase('blast');
      }

      // Draw & update particles
      particles.forEach(p => {
        if (p.phase === 'gather') {
          // Delayed fade-in
          if (t > p.fadeInDelay) {
            p.gather(t);
          }
        } else if (p.phase === 'blast') {
          p.blast(t);
        }
        p.draw(ctx);
      });

      // Central glow during gathering
      if (t > 1 && t < 3.5) {
        const glowIntensity = Math.min(1, (t - 1) / 1.5);
        const cGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 120);
        cGrad.addColorStop(0, `rgba(20,40,201,${0.15 * glowIntensity})`);
        cGrad.addColorStop(0.5, `rgba(59,95,255,${0.06 * glowIntensity})`);
        cGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = cGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // Keep animating until we're fully in reveal phase
      if (t < 5) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  /* ── Phase: blast → trigger flash + logo reveal ── */
  useEffect(() => {
    if (phase !== 'blast') return;

    const timer = setTimeout(() => {
      setPhase('reveal');
    }, 400);

    return () => clearTimeout(timer);
  }, [phase]);

  /* ── Phase: reveal → flash + logo + subtitle → fade out ── */
  useEffect(() => {
    if (phase !== 'reveal') return;

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase('done');
        if (onComplete) onComplete();
      }
    });

    // 1 — White flash blast
    tl.to(flashRef.current, {
      opacity: 0.85,
      duration: 0.15,
      ease: 'power4.in',
    });

    // 2 — Flash fades
    tl.to(flashRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
    });

    // 3 — Canvas fades to dark
    tl.to(canvasRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.6');

    // 4 — Logo glow pulse appears
    tl.fromTo(logoGlowRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 0.6, scale: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );

    // 5 — Logo reveals with scale + blur dissolve
    tl.fromTo(logoRef.current,
      {
        opacity: 0,
        scale: 0.7,
        filter: 'blur(20px) brightness(3)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px) brightness(1)',
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // 6 — Glow settles
    tl.to(logoGlowRef.current, {
      opacity: 0.2,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3');

    // 7 — Subtitle
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.1'
    );

    // 8 — Hold, then fade entire overlay
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      delay: 1.2,
    });

    return () => tl.kill();
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: DARK,
        overflow: 'hidden',
      }}
    >
      {/* ── Smoke particle canvas ── */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* ── White flash overlay ── */}
      <div
        ref={flashRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle, #fff 0%, ${BLUE_GLOW} 60%, transparent 100%)`,
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── Logo reveal block ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          pointerEvents: 'none',
        }}
      >
        {/* Glow behind logo */}
        <div
          ref={logoGlowRef}
          style={{
            position: 'absolute',
            width: 'clamp(300px, 50vw, 600px)',
            height: 'clamp(200px, 30vw, 400px)',
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${BRAND_BLUE}40 0%, ${BLUE_MID}20 40%, transparent 70%)`,
            opacity: 0,
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Actual SVG Logo */}
        <img
          ref={logoRef}
          src="/assets/images/logo-oriotel.svg"
          alt="Oriotel"
          style={{
            width: 'clamp(220px, 45vw, 500px)',
            height: 'auto',
            opacity: 0,
            filter: 'invert(1) brightness(2)',
            willChange: 'transform, opacity, filter',
          }}
        />

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            opacity: 0,
          }}
        >
          <div style={{
            width: 64,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${BRAND_BLUE}, transparent)`,
          }} />
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.85rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontWeight: 300,
            fontFamily: 'Montserrat, sans-serif',
          }}>
            Orchestrer l'avenir
          </p>
        </div>
      </div>
    </div>
  );
}
