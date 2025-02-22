import { ProductGrid } from '@/components/products/ProductGrid'

export const metadata = {
  title: 'Our Products - BrightQ Aerospace Limited',
  description: 'Discover BAL\'s cutting-edge space technology products.',
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <ProductGrid />
    </div>
  )
}