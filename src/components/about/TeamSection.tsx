import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const teamMembers = [
  { name: 'Alavudheen Bathusha M', role: 'CEO & Founder', image: 'https://res.cloudinary.com/dqdojki39/image/upload/v1735195278/c_o02n2f.png' },
  { name: 'Ainain Aftab', role: 'CTO', image: 'https://res.cloudinary.com/dqdojki39/image/upload/v1735195216/20_rdjmsl.jpg' },
  { name: 'Ahamed Sharun', role: 'COO', image: 'https://res.cloudinary.com/dqdojki39/image/upload/v1735195409/WhatsApp_Image_2024-10-22_at_07.52.23_ul8kna.jpg' },
  // { name: 'Michael Chen', role: 'Director of Space Operations', image: '/placeholder.svg?height=300&width=300&text=MC' },
]

export function TeamSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}