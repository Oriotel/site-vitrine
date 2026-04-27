
import AnimatedSection from './AnimatedSection'

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
  const dividerAlign = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''

  return (
    <AnimatedSection className={`mb-16 ${alignClass} ${className}`}>
      <h2 className={`mb-4 text-3xl md:text-5xl lg:text-5xl ${light ? 'text-white' : 'primary-gradient-text'}`}>
        {title}
      </h2>
      {/* Primary divider */}
      <div className={`w-16 h-1 rounded-full primary-gradient-bg mb-6 ${dividerAlign}`} />
      {subtitle && (
        <p className={`text-base md:text-xl max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}

export default SectionTitle
