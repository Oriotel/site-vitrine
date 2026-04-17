import React from 'react'
import useInView from '@/hooks/useInView'

const AnimatedSection = ({
  children,
  animation = 'animate-fade-in-up',
  delay = 0,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}) => {
  const [ref, isInView] = useInView({ threshold })

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        isInView ? `${animation} opacity-100` : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {children}
    </Tag>
  )
}

export default AnimatedSection
