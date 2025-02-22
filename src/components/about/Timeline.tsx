import { Card, CardContent } from '@/components/ui/card'

const milestones = [
  { year: 2024, event: 'BrightQ Aerospace Limited founded' },
  { year: 2026, event: 'First successful satellite launch' },
  { year: 2028, event: 'Opened international offices in Europe and Asia' },
  { year: 2030, event: 'Completed first manned mission to the Moon' },
  { year: 2032, event: 'Established permanent Lunar base' },
  { year: 2035, event: 'Launched first Mars exploration mission' },
]

export function Timeline() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? 'left-1/2 pl-8' : 'right-1/2 pr-8 text-right'} mb-8`}>
              <div className="absolute top-5 w-4 h-4 rounded-full bg-primary" style={{ [index % 2 === 0 ? 'left' : 'right']: '-8px' }}></div>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{milestone.year}</h3>
                  <p>{milestone.event}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}