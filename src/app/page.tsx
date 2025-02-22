import { HeroBanner } from '@/components/home/HeroBanner'
import { FeaturedServices } from '@/components/home/FeaturedServices'
import { LatestNews } from '@/components/home/LatestNews'
import { TestimonialSlider } from '@/components/home/TestimonialSlider'
import { CallToAction } from '@/components/home/CallToAction'

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <FeaturedServices />
      <LatestNews />
      <TestimonialSlider />
      <CallToAction />
    </main>
  )
}