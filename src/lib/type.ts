export type Category = "Shoes" | "Shirts" | "Electronics" | "Accessories"

export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface CartItem extends Product {
  quantity: number
}
