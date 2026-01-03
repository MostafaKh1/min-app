"use client"

import { useAppSelector } from "@/lib/redux/hooks"
import { selectTotalPrice } from "@/lib/redux/slice/selectors"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OrderSummary() {
  const totalPrice = useAppSelector(selectTotalPrice)

  return (
    <div className="bg-muted/30 rounded-2xl p-8 sticky top-24">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div className="pt-4 border-t flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <Button className="w-full py-7 text-base font-semibold group">
        Proceed to Checkout
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}