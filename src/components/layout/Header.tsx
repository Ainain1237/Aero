import Link from 'next/link'


export function Header() {
  return (
    <header className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-6 flex justify-start items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
        {/* <img src="/Logo .jpeg" alt="Logo" className="mr-2 h-6 w-6" /> */}
          BrightQ Aerospace Limited
        </Link>
        <nav>
          <ul className="flex space-x-6 ml-auto">
            <li><Link href="/about-us" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/our-services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
            <li><Link href="/contact-us" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}