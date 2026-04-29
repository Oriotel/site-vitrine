import React, { Suspense } from 'react';
import useInView from '@/hooks/useInView';

/**
 * LazySection Component
 * -----------------------------------------------------------
 * A reusable wrapper for intersection-based lazy loading.
 * Combines useInView with React.lazy and Suspense.
 * 
 * Props:
 * - children: The lazy-loaded component.
 * - skeleton: The fallback skeleton to show while loading/out of view.
 * - threshold: IntersectionObserver threshold (default: 0.1).
 * - rootMargin: IntersectionObserver rootMargin (default: '0px').
 * -----------------------------------------------------------
 */
const LazySection = ({ 
  children, 
  skeleton, 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px' 
}) => {
  const [ref, isInView] = useInView({ 
    triggerOnce: true, 
    threshold,
    rootMargin
  });

  return (
    <div ref={ref} className="w-full">
      {isInView ? (
        <Suspense fallback={skeleton}>
          {children}
        </Suspense>
      ) : (
        skeleton
      )}
    </div>
  );
};

export default LazySection;
