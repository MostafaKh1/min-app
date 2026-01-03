import React from 'react'
import ProductCard from './product-card'

function ProductGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        <ProductCard />
    </div>
  )
}

export default ProductGrid