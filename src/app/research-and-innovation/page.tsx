import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Zap, Rocket, Globe } from 'lucide-react'

const researchAreas = [
  {
    title: "Advanced Propulsion Systems",
    description: "Developing next-generation propulsion technologies for faster and more efficient space travel.",
    icon: Rocket,
  },
  {
    title: "Space-Based Energy Solutions",
    description: "Researching methods to harness and transmit solar energy from space to Earth.",
    icon: Zap,
  },
  {
    title: "Artificial Gravity Systems",
    description: "Innovating solutions to create artificial gravity for long-duration space missions.",
    icon: Atom,
  },
  {
    title: "Closed-Loop Life Support",
    description: "Advancing technologies for sustainable life support systems in space habitats.",
    icon: Globe,
  },
]

export const metadata = {
  title: 'Research & Innovation - SpaceVenture',
  description: 'Discover SpaceVenture\'s cutting-edge research and innovation in space technology.',
}

export default function ResearchAndInnovationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Research & Innovation</h1>
      <p className="text-center text-lg mb-12">
        At BrightQ Aerospace Limited, we&apos;re constantly pushing the boundaries of space technology. 
        Our research and innovation efforts are focused on solving the most challenging problems in space exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchAreas.map((area, index) => (
          <Card key={index}>
            <CardHeader>
              <area.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{area.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}