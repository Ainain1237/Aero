import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
}

export function ServiceCard({ title, description, icon: Icon, link }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <Icon className="w-12 h-12 mb-4 text-primary" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">
          Learn more about our cutting-edge solutions and how we can help your space-related projects.
        </p>
      </CardContent>
      <CardContent className="pt-0">
        <Button asChild>
          <Link href={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}