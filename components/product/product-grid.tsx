import React from 'react'
import { ProductCard } from './product-card'
import { products as allProducts } from "@/lib/data"


export async function ProductGrid({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const category = searchParams.category 
  const query = (searchParams.query as string)?.toLowerCase()
  const minPrice = Number(searchParams.minPrice) || 0
  const maxPrice = Number(searchParams.maxPrice) || 500


  const filteredProducts = allProducts.filter((product) => {
    if (category && category !== "All" && product.category !== category) return false
    if (query && !product.title.toLowerCase().includes(query) && !product.description.toLowerCase().includes(query))
      return false
    if (product.price < minPrice || product.price > maxPrice) return false
    return true
  })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

