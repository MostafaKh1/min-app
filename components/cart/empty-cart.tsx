"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export function EmptyCart() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
        <ShoppingBag className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Your bag is empty</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        It looks like you haven&apos;t added anything to your bag yet. Explore our latest collection to find something you
        love.
      </p>
      <Button asChild size="lg">
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  )
}