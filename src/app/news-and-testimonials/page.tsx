import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const newsItems = [ 
  {
    title: "BrightQ Aerospace Limited Startup Shines Bright in the Aerospace Industry",
    date: "2025-06-15",
    content: "BrightQ successfully deployed a new constellation of communication satellites, enhancing global connectivity.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1735195300/Logo_bq2do5.jpg",
  },
  {
    title: "Breakthrough in Mini Surveillance Radar Technology",
    date: "2025-05-22",
    content: "Our research team has developed a revolutionary Mini Surveillance Radar Technology, marking a significant advancement in space exploration.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1735195211/8_vh97qu.jpg",
  },
  {
    title: "BrightQ Plans to Build Army Surveillance UAV ",
    date: "2025-04-10",
    content: "BrightQ has announced ambitious plans to develop an innovative Army Surveillance UAV that promises to revolutionize military operations.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1735195213/9_s4r0cp.jpg",
  },
  {
    title: "BrightQ Plans to Build Sustainable Engine for Rocket ",
    date: "2025-04-10",
    content: "BrightQ has unveiled plans to develop a groundbreaking sustainable engine for rockets, aiming to revolutionize the aerospace industry.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1735195211/10_qdjzd3.jpg",
  },
  {
    title: "Revolutionary Surveillance Drone Developed for Space Exploration ",
    date: "2025-04-10",
    content: "Our research team has successfully developed a revolutionary surveillance drone, marking a significant advancement in space exploration.",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1735195210/11_ukegna.webp",
  },
  {
    title: "BrightQ Launches New Satellite Constellation ",
    date: "2025-04-10",
    content: "BrightQ successfully deployed a new constellation of communication satellites, enhancing global connectivity",
    image: "https://res.cloudinary.com/dqdojki39/image/upload/v1735195210/7_pzes2m.webp",
  },
]

// const testimonials = [
//   {
//     name: "Dr. Jane Smith",
//     role: "Chief Scientist, Global Space Agency",
//     content: "SpaceVenture's innovative technologies have been instrumental in advancing our research capabilities. Their commitment to excellence is truly commendable.",
//     image: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "John Doe",
//     role: "CEO, Interplanetary Ventures",
//     content: "Working with SpaceVenture has been a game-changer for our company. Their expertise and cutting-edge solutions have accelerated our space exploration projects significantly.",
//     image: "/placeholder.svg?height=100&width=100&text=JD",
//   },
// ]

export const metadata = {
  title: 'News & Testimonials - BrightQ',
  description: 'Stay updated with the latest news and read what our clients say about us.',
}

export default function NewsAndTestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">News & Testimonials</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-40 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <CardDescription className="mb-2">{item.date}</CardDescription>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <div className="text-center mt-12">
      <Link href="https://www.isro.gov.in/recent_updates.html" target="_blank" rel="noopener noreferrer">
          <Button size="lg">
          ISRO Live Updates
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      {/* <section>
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="flex items-start space-x-4 p-6">
                <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="rounded-full" />
                <div>
                  <CardTitle className="mb-2">{testimonial.name}</CardTitle>
                  <CardDescription className="mb-2">{testimonial.role}</CardDescription>
                  <p className="italic">"{testimonial.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </div>
    
  )
}