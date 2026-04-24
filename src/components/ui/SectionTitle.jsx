import { cn } from '@/utils/cn';

export function SectionTitle({ 
  title, 
  subtitle, 
  description,
  icon: Icon,
  align = 'center', // 'left', 'center', ou 'right'
  withLine = false, // Optionnel : pour la petite ligne bleue (obsoldète mais gardée pour compatibilité)
  className,
  titleClassName,
  descriptionClassName
}) {
  return (
    <div className={cn(
      "flex flex-col relative z-10",
      {
        "items-start text-left": align === 'left',
        "items-center text-center": align === 'center',
        "items-end text-right": align === 'right',
      },
      className
    )}>
      {/* Icône optionnelle */}
      {Icon && (
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-signal-blue text-white shadow-lg shadow-signal-blue/20 transform transition-transform hover:scale-110">
          <Icon size={28} />
        </div>
      )}

      {/* Le Titre principal */}
      <div className="relative inline-block mb-4">
        <h2 className={cn(
          "relative z-10 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight primary-gradient-text pb-2 font-oswald",
          titleClassName
        )}>
          {title}
        </h2>
        
        {/* SVG Scribble Effect */}
        <svg
          className={cn(
            "absolute -top-4 -z-10 w-48 md:w-64 text-signal-blue/20 opacity-100 transition-transform duration-700",
            {
              "-right-12 md:-right-16": align === 'center' || align === 'left',
              "-left-12 md:-left-16 rotate-180": align === 'right',
            }
          )}
          fill="none"
          height="86"
          viewBox="0 0 108 86"
          width="108"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="28"
          />
        </svg>
      </div>

      {/* Le Sous-titre (ex: "QUI NOUS SOMMES") */}
      {subtitle && (
        <span className="text-signal-blue font-bold text-[0.75rem] md:text-sm uppercase tracking-[0.2em] mb-3 block">
          {subtitle}
        </span>
      )}
      {/* Description optionnelle */}
      {description && (
        <p className={cn(
          "max-w-2xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4",
          {
            "mx-auto": align === 'center',
            "ml-auto": align === 'right',
            "mr-auto": align === 'left',
          },
          descriptionClassName
        )}>
          {description}
        </p>
      )}

      {/* Ligne décorative (optionnelle, gardée pour Expertises si besoin) */}
      {withLine && (
        <div className="w-10 h-[3px] bg-signal-blue rounded-full mt-2"></div>
      )}
    </div>
  );
}

export default SectionTitle;