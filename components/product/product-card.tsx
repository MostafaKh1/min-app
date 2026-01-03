"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus, Star } from "lucide-react"
import { Product } from "@/lib/type"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
      <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-xs font-medium">{product.rating.rate}</span>
          <span className="text-[10px] text-muted-foreground">({product.rating.count})</span>
        </div>

        <Link href={`/products/${product.id}`} className="mb-1">
          <h3 className="line-clamp-1 text-sm font-semibold hover:text-primary transition-colors">{product.title}</h3>
        </Link>

        <p className="line-clamp-2 text-xs text-muted-foreground flex-1 mb-4">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-bold">${product.price}</span>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 rounded-full p-0"
            onClick={(e) => {
              e.preventDefault()
              
            }}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
