import { CompanyOverview } from '@/components/about/CompanyOverview'
import { TeamSection } from '@/components/about/TeamSection'
import { MissionStatement } from '@/components/about/MissionStatement'
import { VisionStatement } from '@/components/about/VisionStatement'

export const metadata = {
  title: 'About BrightQ Aerospace Limited - Our Story and Mission',
  description: 'Learn about BAL\'s journey, our team, and our commitment to revolutionizing space technology.',
}

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About BrightQ Aerospace Limited</h1>
      <CompanyOverview />
      <TeamSection />
      <VisionStatement />
      <MissionStatement />
    </div>
  )
}