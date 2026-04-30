import React from 'react';
import { cn } from '@/utils/cn';
import { Link } from 'react-router-dom';

export function Logo({ 
  variant = 'default', 
  className,
  href = "/",
  asLink = true 
}) {
  const logoImg = (
    <img
      src="/assets/images/logo-oriotel.svg"
      alt="Oriotel Logo"
      className={cn(
        "w-auto object-contain transition-all duration-300",
        variant === 'white' && "brightness-0 invert",
        className
      )}
    />
  );

  if (asLink) {
    return (
      <Link to={href} className="inline-block">
        {logoImg}
      </Link>
    );
  }

  return logoImg;
}

export default Logo;
