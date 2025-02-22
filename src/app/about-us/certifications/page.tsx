import { CertificationList } from '@/components/about/CertificationList'

export const metadata = {
  title: 'Our Certifications - BrightQ Aerospace Limited',
  description: 'Explore BAL\'s industry certifications and quality standards.',
}

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Certifications</h1>
      <CertificationList />
    </div>
  )
}