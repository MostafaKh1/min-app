import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, Product } from "@/lib/type"

interface CartState {
  items: CartItem[]
}



const getInitialState = (): CartState => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart_storage")
    if (stored) {
      try {
        return { items: JSON.parse(stored) }
      } catch {
        return { items: [] }
      }
    }
  }
  return { items: [] }
}


const initialState: CartState = getInitialState()

const saveToStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart_storage", JSON.stringify(items))
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      saveToStorage(state.items)
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      saveToStorage(state.items)
    },

    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== productId)
      } else {
        const item = state.items.find((item) => item.id === productId)
        if (item) {
          item.quantity = quantity
        }
      }
      saveToStorage(state.items)
    },

    clearCart: (state) => {
      state.items = []
      saveToStorage(state.items)
    },
  },
})

export const {  addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
