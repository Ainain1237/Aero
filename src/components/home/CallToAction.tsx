import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore the Final Frontier?</h2>
        <p className="text-xl mb-8">Join us in shaping the future of space exploration and technology.</p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200">
          <Link href="/contact-us">Get Started Today</Link>
        </Button>
      </div>
    </section>
  )
}