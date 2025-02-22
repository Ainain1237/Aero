import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Rocket, Satellite, Radio } from 'lucide-react'

export function FeaturedServices() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Rocket className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Aerospace Manufacturing</h3>
            <p className="text-muted-foreground mb-4">
              Cutting-edge manufacturing solutions for the aerospace industry.
            </p>
            <Link href="/our-services/aerospace-manufacturing" className="text-primary hover:underline">
              Learn More
            </Link>
          </Card>
          <Card className="p-6">
            <Satellite className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Space Transport</h3>
            <p className="text-muted-foreground mb-4">
              Reliable and efficient transport solutions for space missions.
            </p>
            <Link href="/our-services/space-transport" className="text-primary hover:underline">
              Learn More
            </Link>
          </Card>
          <Card className="p-6">
            <Radio className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Telecommunications</h3>
            <p className="text-muted-foreground mb-4">
              Advanced communication systems for Earth and space.
            </p>
            <Link href="/our-services/telecommunications" className="text-primary hover:underline">
              Learn More
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}