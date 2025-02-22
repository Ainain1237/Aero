import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export function LatestNews() {
  // Array of objects containing unique content for each card
  const newsItems = [
    {
      id: 1,
      title: 'BrightQ Aerospace Breaks Ground with Revolutionary Tech',
      description: 'BrightQ Aerospace revolutionizes the aerospace industry with cutting-edge technology.',
      image: '/Logo .jpeg',
    },
    {
      id: 2,
      title: 'New Horizons in Space Exploration',
      description: 'The aerospace industry reaches new heights with advancements in space exploration.',
      image: '/15.jpg',
    },
    {
      id: 3,
      title: 'Innovative Startups Changing Aerospace Landscape',
      description: 'Startups are taking the aerospace sector by storm with innovative solutions.',
      image: '/16.webp',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              {/* Dynamic image source and alt text */}
              <Image
                src={`${item.image}?height=200&width=400&text=News+${item.id}`}
                alt={`News ${item.id}`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Dynamic title and description */}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Link href="/news-and-testimonials" className="text-primary hover:underline">
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
