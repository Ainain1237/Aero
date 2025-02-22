import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', image: '/placeholder.svg?height=100&width=100&text=ISO' },
  { name: 'AS9100D', description: 'Aerospace Quality Management', image: '/placeholder.svg?height=100&width=100&text=AS' },
  { name: 'CMMI Level 5', description: 'Capability Maturity Model Integration', image: '/placeholder.svg?height=100&width=100&text=CMMI' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System', image: '/placeholder.svg?height=100&width=100&text=ISO' },
]

export function CertificationList() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={100}
                  height={100}
                  className="mr-6"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          These certifications demonstrate our commitment to quality, safety, and continuous improvement in all our space technology endeavors.
        </p>
      </div>
    </section>
  )
}