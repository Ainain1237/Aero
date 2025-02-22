"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 import { Rocket, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/our-services' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research-and-innovation' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news-and-testimonials' },
  { label: 'Contact', href: '/contact-us' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900 text-white" >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4" >
          <Link href="/" className="text-2xl font-bold flex items-center mr-auto"style={{ marginLeft: '-100px' }}>
            {<Rocket className="mr-2 h-6 w-6" /> }
           
            BrightQ Aerospace Limited
          </Link>
          <div className="hidden md:flex space-x-4 " >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-gray-300",
                  pathname === item.href && "text-primary font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block py-2 px-4 hover:bg-gray-800",
                pathname === item.href && "bg-gray-800"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}