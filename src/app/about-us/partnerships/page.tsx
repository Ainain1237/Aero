import { PartnerGrid } from '@/components/about/PartnerGrid'

export const metadata = {
  title: 'Our Partnerships - BrightQ',
  description: 'Discover BrightQ\'s strategic partnerships in the space industry.',
}

export default function PartnershipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Partnerships</h1>
      <PartnerGrid />
    </div>
  )
}