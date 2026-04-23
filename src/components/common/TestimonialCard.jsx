
import { Quote } from 'lucide-react'
import Card from './Card'

const TestimonialCard = ({ name, role, content, delay = 0 }) => {
  return (
    <Card className="relative" primary>
      <Quote size={32} className="text-primary-500/10 absolute top-6 right-6" />
      <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full primary-gradient-bg flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-slate-900 text-sm font-semibold">{name}</p>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard
