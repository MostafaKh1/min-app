import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { ProductInfo } from "@/components/product/product-info"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ProductGallery } from "@/components/product/product-gallery"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 md:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
          <ProductGallery image={product.image} title={product.title} />
      
        
          <ProductInfo product={product} />
       
      </div>

      <div className="mt-24 border-t pt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((related) => (
              <Link key={related.id} href={`/products/${related.id}`} className="group">
                <div className="aspect-square relative bg-muted rounded-xl overflow-hidden mb-3">
                 <ProductGallery image={related.image} title={related.title} />
                </div>
                <h3 className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                  {related.title}
                </h3>
                <p className="text-sm text-muted-foreground">${related.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

