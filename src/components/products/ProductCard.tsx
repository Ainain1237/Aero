import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  name: string
  description: string
  image: string
  price: string
  link: string
}

export function ProductCard({ name, description, image, price, link }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <Button asChild>
          <Link href={link}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}