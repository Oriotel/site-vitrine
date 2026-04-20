import { cn } from '@/utils/cn';

export function SectionTitle({ 
  title, 
  subtitle, 
  align = 'left', // 'left', 'center', ou 'right'
  withLine = false, // Optionnel : pour la petite ligne bleue
  className,
  titleClassName // Pour ajuster la taille du texte si besoin
}) {
  return (
    <div className={cn(
      "flex flex-col",
      {
        "items-start text-left": align === 'left',
        "items-center text-center": align === 'center',
        "items-end text-right": align === 'right',
      },
      className
    )}>
      {/* Le Sous-titre (ex: "AGENDA", "TÉMOIGNAGES") */}
      {subtitle && (
        <span className="text-[#1428C9] font-bold text-[0.75rem] md:text-sm uppercase tracking-[0.2em] mb-2 block">
          {subtitle}
        </span>
      )}
      
      {/* Le Titre principal */}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight",
        titleClassName
      )}>
        {title}
      </h2>

      {/* La ligne décorative (utilisée dans Expertises) */}
      {withLine && (
        <div className="w-10 h-[3px] bg-[#1428C9] rounded-full mt-4"></div>
      )}
    </div>
  );
}

export default SectionTitle;