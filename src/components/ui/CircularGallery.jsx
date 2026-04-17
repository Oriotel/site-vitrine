import { useState, useEffect, useRef, forwardRef } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

// A simple utility for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

const CircularGallery = forwardRef(({ 
  items, 
  className, 
  radius: manualRadius, // Can still be overridden manually
  autoRotateSpeed = 0.02, 
  scrollContainerRef, // Added for scoped scrolling
  ...props 
}, ref) => {
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { width } = useWindowSize();
  const scrollTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Dynamic values for responsiveness
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  // Calculate responsive radius if not manually provided
  const radius = manualRadius || (isMobile ? 240 : isTablet ? 350 : 450);
  const itemWidth = isMobile ? 180 : 260;
  const itemHeight = isMobile ? 240 : 360;

  // Effect to handle scroll-based rotation
  useEffect(() => {
    const handleScroll = (e) => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      let scrollProgress = 0;
      
      if (scrollContainerRef && scrollContainerRef.current) {
        const target = scrollContainerRef.current;
        const scrollableHeight = target.scrollHeight - target.clientHeight;
        scrollProgress = scrollableHeight > 0 ? target.scrollTop / scrollableHeight : 0;
      } else {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      }

      const scrollRotation = scrollProgress * 360;
      setRotation(scrollRotation);

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const targetElement = scrollContainerRef?.current || window;
    targetElement.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      targetElement.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollContainerRef]);

  // Effect for auto-rotation when not scrolling
  useEffect(() => {
    const autoRotate = () => {
      if (!isScrolling) {
        setRotation(prev => prev + autoRotateSpeed);
      }
      animationFrameRef.current = requestAnimationFrame(autoRotate);
    };

    animationFrameRef.current = requestAnimationFrame(autoRotate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isScrolling, autoRotateSpeed]);

  const anglePerItem = 360 / items.length;
  
  return (
    <div
      ref={ref}
      role="region"
      aria-label="Circular 3D Gallery"
      className={cn("relative w-full h-full flex items-center justify-center overflow-hidden", className)}
      style={{ perspective: '2000px', contain: 'paint' }}
      {...props}
    >
      <div
        className="relative w-full h-full"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {items.map((item, i) => {
          const itemAngle = i * anglePerItem;
          const totalRotation = rotation % 360;
          const relativeAngle = (itemAngle + totalRotation + 360) % 360;
          const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
          
          // Tightened focus range to avoid items hitting screen edges
          const focusRange = isMobile ? 60 : 80;
          const isExtreme = normalizedAngle > 85; // Hide even earlier
          const opacity = isExtreme ? 0 : Math.max(0, 1 - (normalizedAngle / focusRange));

          return (
            <div
              key={i} 
              role="group"
              aria-label={item.common}
              className={cn("absolute", isExtreme ? "pointer-events-none" : "")}
              style={{
                width: `${itemWidth}px`,
                height: `${itemHeight}px`,
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                left: '50%',
                top: '50%',
                marginLeft: `-${itemWidth / 2}px`,
                marginTop: `-${itemHeight / 2}px`,
                opacity: opacity,
                visibility: isExtreme ? 'hidden' : 'visible',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, width 0.4s, height 0.4s',
                zIndex: normalizedAngle < 45 ? 50 : 10,
              }}
            >
              <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden group border border-slate-200/50 dark:border-slate-800/50 bg-white/10 dark:bg-slate-900/30 backdrop-blur-md">
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: item.photo.pos || 'center' }}
                />
                
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white transition-opacity duration-300">
                  <h2 className="text-lg md:text-xl font-bold tracking-tight mb-1 leading-tight">{item.common}</h2>
                  <p className="text-xs md:text-sm font-medium text-white/70 italic">{item.binomial}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
