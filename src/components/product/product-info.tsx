"use client"

import { Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react"
import type { Product } from "@/lib/type"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/redux/hooks"
import { addItem } from "@/lib/redux/slice/cart-slice"
import { useState } from "react"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const dispatch = useAppDispatch()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    dispatch(addItem(product))
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.category}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{product.title}</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating.rate) ? "fill-primary text-primary" : "text-muted border-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium">{product.rating.rate}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <span className="text-sm text-muted-foreground">{product.rating.count} reviews</span>
      </div>

      <div className="text-3xl font-bold mb-8">${product.price}</div>

      <div className="prose prose-sm text-muted-foreground mb-10">
        <p>{product.description}</p>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        <Button size="lg" className="w-full py-7 text-base font-semibold" onClick={handleAddToCart} disabled={isAdding}>
          {isAdding ? "Adding to Bag..." : "Add to Bag"}
        </Button>
        <Button size="lg" variant="outline" className="w-full py-7 text-base font-semibold bg-transparent">
          Buy Now
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-8 border-t">
        <div className="flex items-start gap-4">
          <Truck className="h-5 w-5 text-primary" />
          <div>
            <h4 className="text-sm font-semibold">Free Shipping</h4>
            <p className="text-xs text-muted-foreground">Free standard shipping on all orders over $100.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <RefreshCcw className="h-5 w-5 text-primary" />
          <div>
            <h4 className="text-sm font-semibold">Easy Returns</h4>
            <p className="text-xs text-muted-foreground">30-day return policy for a full refund or exchange.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <div>
            <h4 className="text-sm font-semibold">2 Year Warranty</h4>
            <p className="text-xs text-muted-foreground">Full coverage for any manufacturing defects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
