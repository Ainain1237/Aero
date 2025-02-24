import { ProductCard } from "./ProductCard"

const products = [
  {
    name: "Weather Forecast Satellite",
    description: "Advanced satellite for accurate weather forecasting and climate monitoring.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1740404852/vctzsaqpuw5e7vrudzrr.jpg",
    //price: "$999,999",
    link: "/products/spaceshield",
  },
  {
    name: "Radar System for Surveillance",
    description: "Cutting-edge radar system for high-precision surveillance and monitoring.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1740405396/t8c73jxnmviaohapjeqd.webp",
    //price: "$249,999",
    link: "/products/nanosat-x",
  },
  {
    name: "Surveillance Drone",
    description: "Advanced drone for real-time surveillance and high-definition aerial monitoring.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1740404688/ycdw9un7dkjpq96wl55c.jpg",
    //price: "$4,999,999",
    link: "/products/lunarhab",
  },
  {
    name: "Unmanned Ariel Vechile",
    description: "Advanced drone for real-time surveillance and high-definition aerial monitoring.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1740405477/n0cuvkrmoixwzpfdyipl.webp",
    //price: "$1,499,999",
    link: "/products/astrofuel",
  },
  {
    name: "Millitary Drone.",
    description: "Next-generation drone for surveillance and monitoring.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1740405537/esdjrxqksliz0xzftu28.jpg",
    //price: "$799,999",
    link: "/products/spacesuit-x",
  },
  {
    name: "Mid-range drones",
    description: "Military combat and surveillance drones.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1740405598/xl1dzoneqmhohfj5ibgz.webp",
    //price: "$3,499,999",
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
            <ProductCard price={""} key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}