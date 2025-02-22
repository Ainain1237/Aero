import { ServiceList } from '@/components/services/ServiceList'

export const metadata = {
  title: 'Our Services - BrightQ Aerospace Limited',
  description: 'Explore the range of innovative space technology services offered by BrightQ Aerospace Limited.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <ServiceList />
    </div>
  )
}