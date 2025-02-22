import { Card, CardContent } from '@/components/ui/card'
import { Rocket, Globe, Zap } from 'lucide-react'

export function VisionStatement() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-xl text-center italic">
              &quot;At BrightQ Aerospace, our vision is to become the global leader in aerospace
              innovation, driving advancements in both space exploration and air transport.
              We strive to develop sustainable, cutting-edge technologies that transform how
              the world connects, communicates, and explores the universe.&quot;
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Pushing the boundaries of space technology to solve complex challenges and create new possibilities.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p>Making space exploration and its benefits accessible to researchers, businesses, and individuals worldwide.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>Developing sustainable practices for space exploration and utilizing space resources responsibly.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}