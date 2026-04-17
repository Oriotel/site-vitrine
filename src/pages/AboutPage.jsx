
import AboutHero from '@/components/About/AboutHero'
import ExploreSection from '@/components/About/ExploreSection'
import TimelineSection from '@/components/About/TimelineSection'
import StatsSection from '@/components/About/StatsSection'
import { TeamMarqueeSection } from '@/components/ui/TeamMarqueeSection'

const AboutPage = () => {
  return (
    <>
    <main className="w-full overflow-x-hidden relative">
      <AboutHero />
      <ExploreSection />
      <TimelineSection />
      <TeamMarqueeSection />
      <StatsSection />
    </main>
    </>
  )
}

export default AboutPage
