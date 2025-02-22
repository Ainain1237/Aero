import { MissionStatement } from '@/components/about/MissionStatement'

export const metadata = {
  title: 'Our Mission - BrightQ Aerospace Limited',
  description: 'Learn about BAL\'s mission to revolutionize space technology and exploration.',
}

export default function OurMissionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
      <MissionStatement />
    </div>
  )
}