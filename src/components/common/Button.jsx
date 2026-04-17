
import { Link } from 'react-router-dom'

const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-300 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

const variantStyles = {
  primary: 'primary-gradient-bg text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary-500/20',
  secondary: 'bg-transparent border border-primary-500/40 text-primary-600 hover:bg-primary-500/5 hover:border-primary-500/60',
  ghost: 'bg-transparent text-slate-600 hover:text-primary-600 hover:bg-slate-100',
  white: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:shadow-lg',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const classes = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : 18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : 18} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}

export default Button
