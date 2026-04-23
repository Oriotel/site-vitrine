import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * ScrollReveal — Premium scroll-triggered animation wrapper.
 * 
 * Props:
 *  - variant: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'blur' | 'slideReveal' | 'rotateIn' | 'clipReveal' (default: 'fadeUp')
 *  - delay: delay in ms before animation starts (default: 0)
 *  - duration: animation duration in ms (default: 900)
 *  - distance: how far the element travels in px (default: 60)
 *  - threshold: how much of the element must be visible before triggering (default: 0.15)
 *  - once: if true, only animate once when first visible (default: true)
 *  - stagger: delay between children when used with staggerChildren (default: 0)
 *  - className: additional classes
 *  - as: the wrapper element tag (default: 'div')
 *  - easing: custom cubic-bezier easing (default: 'cubic-bezier(0.16, 1, 0.3, 1)')
 */
const ScrollReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 900,
  distance = 60,
  threshold = 0.15,
  once = true,
  stagger = 0,
  className = '',
  as: Tag = 'div',
  style: externalStyle = {},
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Build the initial (hidden) and final (visible) styles per variant
  const getInitialStyles = useCallback(() => {
    switch (variant) {
      case 'fadeUp':
        return {
          opacity: 0,
          transform: `translateY(${distance}px)`,
        };
      case 'fadeDown':
        return {
          opacity: 0,
          transform: `translateY(-${distance}px)`,
        };
      case 'fadeLeft':
        return {
          opacity: 0,
          transform: `translateX(${distance}px)`,
        };
      case 'fadeRight':
        return {
          opacity: 0,
          transform: `translateX(-${distance}px)`,
        };
      case 'scaleUp':
        return {
          opacity: 0,
          transform: `scale(0.88) translateY(${distance * 0.4}px)`,
        };
      case 'blur':
        return {
          opacity: 0,
          transform: `translateY(${distance * 0.5}px) scale(0.97)`,
          filter: 'blur(8px)',
        };
      case 'slideReveal':
        return {
          opacity: 0,
          transform: `translateX(-${distance}px) skewX(4deg)`,
        };
      case 'rotateIn':
        return {
          opacity: 0,
          transform: `perspective(800px) rotateY(8deg) translateY(${distance * 0.3}px)`,
        };
      case 'clipReveal':
        return {
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          transform: `translateY(${distance * 0.3}px)`,
        };
      default:
        return {
          opacity: 0,
          transform: `translateY(${distance}px)`,
        };
    }
  }, [variant, distance]);

  const getVisibleStyles = useCallback(() => {
    const base = {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1) skewX(0deg) rotateY(0deg)',
    };
    if (variant === 'blur') {
      base.filter = 'blur(0px)';
    }
    if (variant === 'clipReveal') {
      base.clipPath = 'inset(0% 0 0 0)';
    }
    if (variant === 'rotateIn') {
      base.transform = 'perspective(800px) rotateY(0deg) translateY(0)';
    }
    return base;
  }, [variant]);

  const initialStyles = getInitialStyles();
  const visibleStyles = getVisibleStyles();

  const transitionProps = [
    `opacity ${duration}ms ${easing} ${delay}ms`,
    `transform ${duration}ms ${easing} ${delay}ms`,
  ];

  if (variant === 'blur') {
    transitionProps.push(`filter ${duration}ms ${easing} ${delay}ms`);
  }
  if (variant === 'clipReveal') {
    transitionProps.push(`clip-path ${duration}ms ${easing} ${delay}ms`);
  }

  const baseStyle = {
    ...(isVisible ? visibleStyles : initialStyles),
    transition: transitionProps.join(', '),
    willChange: 'opacity, transform' + (variant === 'blur' ? ', filter' : '') + (variant === 'clipReveal' ? ', clip-path' : ''),
    ...externalStyle,
  };

  // If stagger is set, we clone children and add incremental delays
  const renderChildren = () => {
    if (stagger > 0 && React.Children.count(children) > 1) {
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        const childDelay = delay + index * stagger;
        return (
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : `translateY(${distance * 0.5}px)`,
              transition: `opacity ${duration}ms ${easing} ${childDelay}ms, 
                           transform ${duration}ms ${easing} ${childDelay}ms`,
              willChange: 'opacity, transform',
            }}
          >
            {child}
          </div>
        );
      });
    }
    return children;
  };

  return (
    <Tag ref={ref} className={className} style={baseStyle}>
      {renderChildren()}
    </Tag>
  );
};

export default ScrollReveal;
