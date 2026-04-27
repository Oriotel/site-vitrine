/**
 * SkeletonSection.jsx
 * -----------------------------------------------------------
 * Wrapper qui rend un skeleton "vivant" :
 * - Invisible tant qu'il n'est pas dans le viewport
 * - Apparaît avec un fondu doux quand il entre en vue
 * - Utilise le hook useInView existant
 *
 * Usage :
 *   <SkeletonSection delay={100}>
 *     <MonSkeletonBlock />
 *   </SkeletonSection>
 * -----------------------------------------------------------
 */

import React from 'react';
import useInView from '@/hooks/useInView';

const SkeletonSection = ({ children, delay = 0, className = '' }) => {
  const [ref, isInView] = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default SkeletonSection;
