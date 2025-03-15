import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
const teamMembers = [
  { name: 'Alavudheen Bathusha M', role: 'CEO & Founder',Linkedin:'http://linkedin.com/in/alavudheen-bathusha-m-480341221', image: 'https://res.cloudinary.com/dqdojki39/image/upload/v1742043209/pehtnihnvmxexrjtukp2.jpg' },
  { name: 'Ainain Aftab', role: 'CTO',Linkedin:'https://www.linkedin.com/in/ainain/', image: 'https://res.cloudinary.com/dqdojki39/image/upload/v1742043185/yy2nkkyi4e6gdboqqdff.jpg' },
  { name: 'Ahamed Sharun', role: 'COO',Linkedin:'https://www.linkedin.com/in/ahamed-sharun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', image: 'https://res.cloudinary.com/dqdojki39/image/upload/v1742043233/fechbhmjy0wncg1mdedq.jpg' },
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
                {member.Linkedin && (
                  <Link 
                    href={member.Linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-5 h-5 mr-1" />
                    LinkedIn
                  </Link>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}