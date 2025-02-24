// import Image from 'next/image'
import { Card } from '@/components/ui/card'

export function TestimonialSlider() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <p className="text-lg italic mb-4">
              &quot;BrightQ Aerospace Limited&apos;s  attention to detail and cutting-edge innovations make them a standout company in their field.&quot;
            </p>
            <div className="flex items-center">
              {/* <Image
                src="/17.webp"
                alt="John Doe"
                width={64}
                height={64}
                className="rounded-full mr-4"
              /> */}
              <div>
                {/* <p className="font-semibold">John Doe</p> */}
                {/* <p className="text-muted-foreground">CEO, Space Explorers Inc.</p> */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}