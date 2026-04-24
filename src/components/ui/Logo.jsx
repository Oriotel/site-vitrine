import React from 'react';
import { cn } from '@/utils/cn';

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
      <a href={href} className="inline-block">
        {logoImg}
      </a>
    );
  }

  return logoImg;
}

export default Logo;
