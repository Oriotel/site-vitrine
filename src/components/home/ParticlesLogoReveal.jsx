import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

/* ── Brand palette ── */
const DARK = '#020c1a';
const BRAND_ORANGE = '#F97316';
const ORANGE_LIGHT = '#FDBA74';
const BLUE_BRAND = '#1428C9';
const WHITE = '#ffffff';

/* ── Particle config ── */
const PARTICLE_COUNT = 350;
const GLOW_COLORS = [BRAND_ORANGE, ORANGE_LIGHT, WHITE, '#FFD599', '#FFA94D'];

/* ── Helpers ── */
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

/* ── Particle class ── */
class Particle {
  constructor(w, h, logoRect) {
    this.w = w;
    this.h = h;
    this.logoRect = logoRect;
    this.reset(true);
  }

  reset(initial = false) {
    const cx = this.w / 2;
    const cy = this.h / 2;

    // Start scattered far from center
    const angle = rand(0, Math.PI * 2);
    const dist = rand(Math.max(this.w, this.h) * 0.5, Math.max(this.w, this.h) * 0.9);
    this.x = cx + Math.cos(angle) * dist;
    this.y = cy + Math.sin(angle) * dist;

    // Target: random point around logo center
    const logoSpread = this.logoRect ? Math.min(this.logoRect.width, this.logoRect.height) * 0.5 : 60;
    this.targetX = cx + rand(-logoSpread, logoSpread);
    this.targetY = cy + rand(-logoSpread, logoSpread);

    this.size = rand(1.5, 4.5);
    this.originalSize = this.size;
    this.opacity = 0;
    this.maxOpacity = rand(0.5, 1);

    const c = hexToRgb(pick(GLOW_COLORS));
    this.r = c.r;
    this.g = c.g;
    this.b = c.b;

    this.phase = 'converge'; // converge → hold → explode
    this.speed = rand(0.006, 0.02);
    this.turbulence = rand(0.2, 1.2);
    this.turbOffset = rand(0, 100);
    this.trail = [];
    this.maxTrail = Math.floor(rand(3, 8));

    // Explosion vars
    this.blastAngle = 0;
    this.blastSpeed = 0;

    if (initial) {
      this.fadeDelay = rand(0, 0.8);
      this.opacity = 0;
    }
  }

  converge(t) {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Turbulence — orbital swirl
    const turbX = Math.sin(t * 1.8 + this.turbOffset) * this.turbulence * (dist / 300);
    const turbY = Math.cos(t * 2.2 + this.turbOffset * 1.5) * this.turbulence * (dist / 300);

    // Accelerate as they get closer (magnetic pull)
    const pull = Math.max(this.speed, this.speed * (1 + (300 - Math.min(dist, 300)) / 300));
    this.x += dx * pull + turbX;
    this.y += dy * pull + turbY;

    // Fade in
    if (this.opacity < this.maxOpacity) {
      this.opacity = Math.min(this.maxOpacity, this.opacity + 0.015);
    }

    // Glow brighter as closer to center
    if (dist < 80) {
      this.size = this.originalSize * (1 + (80 - dist) / 80 * 1.5);
    }

    // Trail
    this.trail.push({ x: this.x, y: this.y, opacity: this.opacity * 0.3 });
    if (this.trail.length > this.maxTrail) this.trail.shift();
  }

  hold(t) {
    // Gentle float around target
    const turbX = Math.sin(t * 3 + this.turbOffset) * 0.5;
    const turbY = Math.cos(t * 3.5 + this.turbOffset * 1.3) * 0.5;
    this.x += turbX;
    this.y += turbY;
    // Pulse glow
    this.size = this.originalSize * (1.5 + Math.sin(t * 5 + this.turbOffset) * 0.5);
    this.opacity = Math.min(1, this.maxOpacity * 1.3);
    this.trail = [];
  }

  explode() {
    this.x += Math.cos(this.blastAngle) * this.blastSpeed;
    this.y += Math.sin(this.blastAngle) * this.blastSpeed;
    this.blastSpeed *= 0.96;
    this.opacity *= 0.94;
    this.size *= 0.98;
  }

  draw(ctx) {
    if (this.opacity < 0.01) return;

    // Draw trail
    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i];
      const trailOpacity = t.opacity * (i / this.trail.length) * 0.5;
      if (trailOpacity < 0.005) continue;
      ctx.save();
      ctx.globalAlpha = trailOpacity;
      ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`;
      ctx.beginPath();
      ctx.arc(t.x, t.y, this.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Draw particle with glow
    ctx.save();
    ctx.globalAlpha = this.opacity;

    // Outer glow
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
    grad.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.8)`);
    grad.addColorStop(0.3, `rgba(${this.r},${this.g},${this.b},0.3)`);
    grad.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fill();

    // Core bright dot
    ctx.fillStyle = `rgba(255,255,255,${this.opacity * 0.9})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

/* ── Connection lines between nearby particles ── */
function drawConnections(ctx, particles, maxDist = 60) {
  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];
    if (a.opacity < 0.1) continue;
    for (let j = i + 1; j < particles.length; j++) {
      const b = particles[j];
      if (b.opacity < 0.1) continue;
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.12 * Math.min(a.opacity, b.opacity);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = `rgba(${a.r},${a.g},${a.b},1)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

/* ── Main Component ── */
export default function ParticlesLogoReveal({ onComplete }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const flashRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const [phase, setPhase] = useState('particles'); // particles → reveal → done

  const logoSVG = useMemo(() => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={120}
      height={120}
      viewBox="0 0 124 124"
      fill="none"
    >
      <rect width={124} height={124} rx={24} fill="#F97316" />
      <path
        d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
        fill="white"
      />
      <circle cx={63.2109} cy={37.5391} r={18.1641} fill="black" />
      <rect
        opacity={0.4}
        x={81.1328}
        y={80.7198}
        width={17.5687}
        height={17.3876}
        rx={4}
        transform="rotate(-45 81.1328 80.7198)"
        fill="#FDBA74"
      />
    </svg>
  ), []);

  /* ── Canvas animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    // Init particles
    const logoRect = { width: 120, height: 120 };
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(w, h, logoRect));
    }
    particlesRef.current = particles;
    startTimeRef.current = performance.now();

    let holdTriggered = false;
    let explodeTriggered = false;

    const CONVERGE_DURATION = 2.6;  // seconds for particles to converge
    const HOLD_DURATION = 0.8;       // seconds particles hold/pulse
    const HOLD_START = CONVERGE_DURATION;
    const EXPLODE_START = HOLD_START + HOLD_DURATION;

    const animate = (now) => {
      const t = (now - startTimeRef.current) / 1000;
      ctx.clearRect(0, 0, w, h);

      // Dark background with subtle center glow
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.6);
      bgGrad.addColorStop(0, '#0a0e1a');
      bgGrad.addColorStop(0.5, '#050810');
      bgGrad.addColorStop(1, DARK);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Phase transitions
      if (t > HOLD_START && !holdTriggered) {
        holdTriggered = true;
        particles.forEach(p => { p.phase = 'hold'; });
      }

      if (t > EXPLODE_START && !explodeTriggered) {
        explodeTriggered = true;
        const cx = w / 2;
        const cy = h / 2;
        particles.forEach(p => {
          p.phase = 'explode';
          p.blastAngle = Math.atan2(p.y - cy, p.x - cx) + rand(-0.3, 0.3);
          p.blastSpeed = rand(6, 25);
        });
        setPhase('reveal');
      }

      // Update & draw particles
      particles.forEach(p => {
        if (t < p.fadeDelay) return;
        if (p.phase === 'converge') p.converge(t);
        else if (p.phase === 'hold') p.hold(t);
        else if (p.phase === 'explode') p.explode(t);
        p.draw(ctx);
      });

      // Connection lines during converge/hold
      if (t > 1.5 && t < EXPLODE_START + 0.3) {
        drawConnections(ctx, particles, 50);
      }

      // Central magnetic glow
      if (t > 1.0 && t < EXPLODE_START + 0.5) {
        const intensity = t < HOLD_START
          ? Math.min(1, (t - 1.0) / (HOLD_START - 1.0))
          : 1;
        const pulseSize = t > HOLD_START
          ? 100 + Math.sin(t * 8) * 20
          : 60 + (t - 1.0) / (HOLD_START - 1.0) * 40;

        const cGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, pulseSize);
        cGrad.addColorStop(0, `rgba(249,115,22,${0.2 * intensity})`);
        cGrad.addColorStop(0.4, `rgba(253,186,116,${0.08 * intensity})`);
        cGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = cGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // Continue animation
      if (t < EXPLODE_START + 2) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  /* ── Reveal phase: flash + logo appear ── */
  useEffect(() => {
    if (phase !== 'reveal') return;

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase('done');
        if (onComplete) onComplete();
      }
    });

    // 1 — Bright flash
    tl.to(flashRef.current, {
      opacity: 0.9,
      duration: 0.12,
      ease: 'power4.in',
    });

    // 2 — Flash fades quickly
    tl.to(flashRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    // 3 — Canvas fades out
    tl.to(canvasRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.5');

    // 4 — Logo glow pulse
    tl.fromTo(glowRef.current,
      { opacity: 0, scale: 2 },
      { opacity: 0.5, scale: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );

    // 5 — Logo reveals: scale up from small + blur
    tl.fromTo(logoRef.current,
      {
        opacity: 0,
        scale: 0.5,
        filter: 'blur(15px) brightness(3)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px) brightness(1)',
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // 6 — Glow settles
    tl.to(glowRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.2');

    // 7 — Hold logo, then fade entire overlay
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      delay: 0.8,
    });

    return () => tl.kill();
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 30,
        background: DARK,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ── Particle canvas ── */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* ── White/Orange flash overlay ── */}
      <div
        ref={flashRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle, #fff 0%, ${BRAND_ORANGE} 50%, transparent 100%)`,
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── Glow behind logo ── */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${BRAND_ORANGE}50 0%, ${ORANGE_LIGHT}30 40%, transparent 70%)`,
          opacity: 0,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Logo SVG ── */}
      <div
        ref={logoRef}
        style={{
          opacity: 0,
          willChange: 'transform, opacity, filter',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {logoSVG}
      </div>
    </div>
  );
}
