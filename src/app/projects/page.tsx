import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Surveillance Drone",
    description: "Developed a drone for surveillance operations.",
    video: "https://res.cloudinary.com/dqdojki39/video/upload/v1735195306/drone_rjtpu8.mp4",
  },
  {
    title: "Cube-sat-Weather forecasting",
    description: "Engineered a CubeSat-based weather prediction system.",
    video: "https://res.cloudinary.com/dqdojki39/video/upload/v1735195529/forcast_xzaj3b.mp4",
  },
  {
    title: "Mini Surveillance Radar",
    description: "Designed a miniature radar for surveillance.",
    video: "https://res.cloudinary.com/dqdojki39/video/upload/v1735195390/radar_efooac.mp4",
  },
  {
    title: "Sustainable Engine for Rocket [On-Going]",
    description: "Will develop an eco-friendly rocket engine.",
    video: "https://res.cloudinary.com/dqdojki39/video/upload/v1735195286/854269-hd_1920_1080_24fps_online-video-cutter.com_ghcke9.mp4",
  },
  {
    title: "Army Surveillance Radar [On-Going]",
    description: "Will develop a military-grade surveillance radar system.",
    video: "https://res.cloudinary.com/dqdojki39/video/upload/v1735195238/6420489-hd_1920_1080_24fps_rbdoyb.mp4",
  },
  {
    title: "Army Surveillance UAV [On-Going]",
    description: "Will develop a military surveillance UAV.",
    video: "https://res.cloudinary.com/dqdojki39/video/upload/v1735195463/UAV_lnreos.mp4",
  },
]

export const metadata = {
  title: 'Our Projects - BrightQ Aerospace Limited',
  description: 'Explore BAL\'s groundbreaking space exploration and technology projects.',
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <video
                src={project.video}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}