import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export function CompanyOverview() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8">BrightQ Aerospace: Innovating for a Better Tomorrow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              At BrightQ Aerospace, we pride ourselves on being experts across multiple
              critical areas in aerospace manufacturing and services. Our extensive experience
              ensures that we deliver high-quality, reliable products and services tailored to
              meet the demands of space and aviation.
            </p>
            <p className="text-lg mb-4">
            Beyond technological advancement, we are deeply committed to sustainability and responsible space practices. We recognize the profound impact our work has, not only on space but on life here on Earth. By leveraging cutting-edge technologies and forward-thinking approaches, we aim to protect the Earth’s resources while expanding our reach into space. Whether through our innovative propulsion systems that reduce fuel consumption or our satellite technologies that monitor environmental changes, we strive to contribute to a sustainable future.


            </p>
            <p className="text-lg">
              With a commitment to sustainability and responsible space practices, we aim to not only explore the stars but to improve life on Earth through our technological advancements and scientific discoveries.
            </p>
          </div>
       
      <Card> {}
            <CardContent className="p-6">
              <Image
                src="/Logo .jpeg"
                alt="BrightQ Aerospace Limited Headquarters"
                width={600}
                height={200}
                className="w-full h-auto rounded-lg mb-4 "
              />
              <h3 className="text-xl font-semibold mb-2 ">Key Facts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Founded: 2023</li>
                <li>Employees: 100+</li>
                {/* <li>Patents: 200+</li> */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
