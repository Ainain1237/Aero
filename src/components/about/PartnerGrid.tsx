import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const partners = [
  { name: 'NASA', logo: '/placeholder.svg?height=100&width=200&text=NASA' },
  { name: 'ESA', logo: '/placeholder.svg?height=100&width=200&text=ESA' },
  { name: 'SpaceX', logo: '/placeholder.svg?height=100&width=200&text=SpaceX' },
  { name: 'Blue Origin', logo: '/placeholder.svg?height=100&width=200&text=Blue+Origin' },
  { name: 'Lockheed Martin', logo: '/placeholder.svg?height=100&width=200&text=Lockheed+Martin' },
  { name: 'Boeing', logo: '/placeholder.svg?height=100&width=200&text=Boeing' },
]

export function PartnerGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Strategic Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  
                  height={100}
                  className="max-w-full h-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          We collaborate with leading organizations in the space industry to drive innovation and achieve our mission of advancing space exploration and technology.
        </p>
      </div>
    </section>
  )
}