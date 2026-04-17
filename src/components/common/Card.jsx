import React from 'react'

const Card = ({
  children,
  className = '',
  hover = true,
  primary = false,
  padding = 'p-8',
  as: Tag = 'div',
  ...props
}) => {
  return (
    <Tag
      className={`
        bg-white rounded-2xl border border-slate-100 shadow-sm ${padding}
        ${primary ? 'border-primary-500/30' : ''}
        ${hover ? 'hover-lift' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Card
