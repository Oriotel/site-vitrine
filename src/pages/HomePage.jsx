import SponsorsMarquee from '@/components/home/SponsorsMarquee'
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ExpertisesSection from '@/components/home/ExpertisesSection';
import EventsSection from '@/components/home/EventsSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertisesSection />
      <EventsSection />
      <TestimonialsSection />
      <SponsorsMarquee />
    </>
  )
}

export default HomePage;