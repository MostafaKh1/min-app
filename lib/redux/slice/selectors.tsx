import type { RootState } from "@/lib/redux/store"

export const selectCartItems = (state: RootState) => state.cart.items

export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export const selectItemCount = (state: RootState) => state.cart.items.reduce((total, item) => total + item.quantity, 0)
