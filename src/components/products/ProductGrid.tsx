import { ProductCard } from "./ProductCard"

const products = [
  {
    name: "Weather Forecast Satellite",
    description: "Advanced satellite for accurate weather forecasting and climate monitoring.",
    image: "/placeholder.svg?height=200&width=300&text=SpaceShield",
    price: "$999,999",
    link: "/products/spaceshield",
  },
  {
    name: "Radar System for Surveillance",
    description: "Cutting-edge radar system for high-precision surveillance and monitoring.",
    image: "/placeholder.svg?height=200&width=300&text=NanoSat-X",
    price: "$249,999",
    link: "/products/nanosat-x",
  },
  {
    name: "Surveillance Drone",
    description: "Advanced drone for real-time surveillance and high-definition aerial monitoring.",
    image: "/placeholder.svg?height=200&width=300&text=LunarHab",
    price: "$4,999,999",
    link: "/products/lunarhab",
  },
  {
    name: "AstroFuel™ Propulsion System",
    description: "Efficient and sustainable propulsion system for long-duration space missions.",
    image: "/placeholder.svg?height=200&width=300&text=AstroFuel",
    price: "$1,499,999",
    link: "/products/astrofuel",
  },
  {
    name: "SpaceSuit-X",
    description: "Next-generation spacesuit with enhanced mobility and life support systems.",
    image: "/placeholder.svg?height=200&width=300&text=SpaceSuit-X",
    price: "$799,999",
    link: "/products/spacesuit-x",
  },
  {
    name: "OrbitClean™ Debris Removal System",
    description: "Innovative system for removing space debris and protecting orbital assets.",
    image: "/placeholder.svg?height=200&width=300&text=OrbitClean",
    price: "$3,499,999",
    link: "/products/orbitclean",
  },
]

export function ProductGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}