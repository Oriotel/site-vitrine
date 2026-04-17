import React from 'react'

const variants = {
  primary: 'bg-primary-500/10 text-primary-600 border-primary-500/20',
  vip: 'bg-primary-500/10 text-primary-600 border-primary-500/20',
  new: 'bg-slate-100 text-slate-800 border-slate-200',
  open: 'bg-green-50 text-green-700 border-green-200',
  closed: 'bg-red-50 text-red-700 border-red-200',
  default: 'bg-slate-50 text-slate-600 border-slate-200',
}

const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
