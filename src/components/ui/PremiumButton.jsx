import React from 'react';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';

export function PremiumButton({ 
  children, 
  href, 
  onClick, 
  className, 
  icon: Icon = ArrowRight,
  showIcon = true,
  size = "lg" 
}) {
  const content = (
    <>
      {children}
      {showIcon && Icon && (
        <Icon className="w-5 h-5 transform transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      )}
    </>
  );

  const textClasses = cn(
    "group inline-flex items-center gap-2 font-bold tracking-wide transition-opacity hover:opacity-70 cursor-pointer",
    size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base",
    className
  );

  if (href) {
    return (
      <a href={href} className={textClasses}>
        {content}
      </a>
    );
  }

  return (
    <span onClick={onClick} className={textClasses}>
      {content}
    </span>
  );
}

export default PremiumButton;
