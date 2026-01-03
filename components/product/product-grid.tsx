import React from 'react'
import { ProductCard } from './product-card'
import { products as allProducts } from "@/lib/data"


export async function ProductGrid({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const params = await searchParams
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

