import React from 'react';
import { Button } from './button';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PremiumButtonBlue({ 
  children, 
  href, 
  onClick, 
  className, 
  icon: Icon = ArrowRight,
  showIcon = true,
  size = "lg" 
}) {
  const content = (
    <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
      {children}
      {showIcon && Icon && (
        <Icon className="w-5 h-5 transform transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      )}
    </span>
  );

  const buttonClasses = cn(
    "group relative overflow-hidden rounded-full text-white transition-all hover:bg-signal-blue/90 hover:shadow-xl hover:shadow-signal-blue/20",
    size === "lg" ? "px-10 py-6" : size === "sm" ? "px-5 h-9 text-xs" : "px-6 py-4 text-sm",
    className
  );

  if (href) {
    return (
      <Link to={href} className="inline-block">
        <Button className={buttonClasses}>
          {content}
        </Button>
      </Link>
    );
  }

  return (
    <Button onClick={onClick} className={buttonClasses}>
      {content}
    </Button>
  );
}

export default PremiumButtonBlue;
