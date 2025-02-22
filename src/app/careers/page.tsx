import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const jobOpenings = [
  {
    title: "PCB design engineer",
    department: "Engineering",
    location: "Tamil Nadu",
    description: "Design and develop PCBs for advanced electronic systems and technologies.",
  },
  {
    title: "Aerodynamics engineer",
    department: "Engineering",
    location: "Tamil Nadu",
    description: "Design and optimize aerodynamic systems and structures to enhance performance and efficiency in air and space vehicles.",
  },
  {
    title: "Material Designer for 3D",
    department: "Operations",
    location: "Tamil Nadu",
    description: "Design and develop advanced materials and textures for 3D models and simulations, ensuring realism and functionality.",
  },
  {
    title: "Robotics Specialist",
    department: "Engineering",
    location: "Tamil Nadu",
    description: "Develop robotic systems for space exploration and operations.",
  },
]

export const metadata = {
  title: 'Careers - BrightQ Aerospace Limited',
  description: 'Join the BrightQ team and help shape the future of space exploration.',
}

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Careers at BrightQ Aerospace Limited </h1>
      <p className="text-center text-lg mb-12">
        Join our team of visionaries and innovators as we push the boundaries of space technology and exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobOpenings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.department} | {job.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{job.description}</p>
              <Button asChild>
                <Link href="/contact-us">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}