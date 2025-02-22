import { VisionStatement } from '@/components/about/VisionStatement'

export const metadata = {
  title: 'Our Vision - BrightQ Aerospace Limited',
  description: 'Discover BAL\'s vision for the future of space exploration and technology.',
}

export default function OurVisionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Vision</h1>
      <VisionStatement />
    </div>
  )
}