import type { Category, Product } from "./type"

export const products: Product[] = [
  {
    id: "1",
    title: "Classic White Sneakers",
    price: 85,
    description: "Premium leather sneakers with a minimalist design and comfortable sole.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: "2",
    title: "Essential Navy Tee",
    price: 35,
    description: "Soft organic cotton t-shirt with a perfect fit for everyday wear.",
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: { rate: 4.8, count: 85 },
  },
  
  {
    id: "4",
    title: "Running Performance Shoes",
    price: 120,
    description: "Lightweight and breathable shoes designed for long-distance running comfort.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: { rate: 4.6, count: 95 },
  },
  {
    id: "5",
    title: "Checkered Flannel Shirt",
    price: 65,
    description: "Warm and durable flannel shirt, perfect for layering in cooler weather.",
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    rating: { rate: 4.4, count: 65 },
  },
  {
    id: "6",
    title: "Smart Watch Series X",
    price: 399,
    description: "Advanced health tracking, cellular connectivity, and stunning OLED display.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=400&fit=crop",
    rating: { rate: 4.7, count: 150 },
  },
  {
    id: "7",
    title: "Leather Messenger Bag",
    price: 150,
    description: "Handcrafted genuine leather bag with spacious compartments for your laptop and daily essentials.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    rating: { rate: 4.8, count: 42 },
  },
  {
    id: "8",
    title: "Denim Jacket",
    price: 95,
    description: "Timeless denim jacket with a rugged finish and functional pockets.",
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 78 },
  },
]


export const CATEGORIES: (Category | "All")[] = ["All", "Shoes", "Shirts", "Electronics", "Accessories"]

