import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, Lightbulb } from 'lucide-react'

export function MissionStatement() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-xl text-center italic">
            &quot;Our mission is to provide precision-engineered aerospace products and services
that enhance the safety, efficiency, and reliability of air and space travel.
Through continuous research, rigorous quality assurance, and partnerships with
leading aerospace entities, we aim to foster technological advancements that
make the aerospace industry safer, more sustainable, and more efficient.&quot;
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-center">Advance Space Technology</h3>
              <ul className="list-disc list-inside">
                <li>Develop cutting-edge propulsion systems</li>
                <li>Create advanced life support technologies</li>
                <li>Innovate in space manufacturing and construction</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-center">Foster Collaboration</h3>
              <ul className="list-disc list-inside">
                <li>Partner with international space agencies</li>
                <li>Collaborate with academic institutions</li>
                <li>Support STEM education initiatives</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-center">Drive Innovation</h3>
              <ul className="list-disc list-inside">
                <li>Invest in research and development</li>
                <li>Encourage entrepreneurship in space sector</li>
                <li>Develop sustainable space exploration practices</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}