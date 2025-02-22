import { Rocket, Satellite, Radio, Microscope, Truck, Shield } from "lucide-react"
import { ServiceCard } from "./ServiceCard"

const services = [
  {
    title: "Aerospace Manufacturing",
    description: "Cutting-edge manufacturing solutions for the aerospace industry.",
    icon: Rocket,
    link: "/our-services/aerospace-manufacturing",
  },
  {
    title: "Space Transport",
    description: "Reliable and efficient transport solutions for space missions.",
    icon: Satellite,
    link: "/our-services/space-transport",
  },
  {
    title: "Telecommunications",
    description: "Advanced communication systems for Earth and space.",
    icon: Radio,
    link: "/our-services/telecommunications",
  },
  {
    title: "Research & Development",
    description: "Pioneering research to push the boundaries of space technology.",
    icon: Microscope,
    link: "/our-services/research-and-development",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Specialized logistics solutions for space missions and operations.",
    icon: Truck,
    link: "/our-services/logistics-and-supply-chain",
  },
  {
    title: "Space Security",
    description: "Protecting space assets and ensuring mission safety.",
    icon: Shield,
    link: "/our-services/space-security",
  },
]

export function ServiceList() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}