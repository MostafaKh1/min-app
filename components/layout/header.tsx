"use client"

import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectItemCount } from "@/lib/redux/slice/selectors"

export function Header() {

  const cartCount = useAppSelector(selectItemCount)

 
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b py-3"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              WEGE.
            </Link>
          </div>

          <div className="flex items-center gap-2">
           <Link href="/cart">
           <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
              </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
