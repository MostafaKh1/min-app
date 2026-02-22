'use client';

import { useAppDispatch } from '@/lib/redux/hooks';
import { removeItem, updateQuantity } from '@/lib/redux/slice/cart-slice';
import type { CartItem as CartItemType } from '@/lib/type';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-6 pb-8 border-b last:border-0">
      <Link
        href={`/products/${item.id}`}
        className="relative aspect-square w-full sm:w-40 bg-muted rounded-xl overflow-hidden flex-shrink-0"
      >
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          fill
          className="object-cover"
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <div className="flex justify-between gap-4 mb-2">
            <Link
              href={`/products/${item.id}`}
              className="font-semibold hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
            <span className="font-bold">${item.price}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            {item.category}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              className="p-2 hover:bg-muted transition-colors"
              onClick={() =>
                dispatch(
                  updateQuantity({
                    productId: item.id,
                    quantity: item.quantity - 1,
                  })
                )
              }
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              className="p-2 hover:bg-muted transition-colors"
              onClick={() =>
                dispatch(
                  updateQuantity({
                    productId: item.id,
                    quantity: item.quantity + 1,
                  })
                )
              }
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1.5 text-sm"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}
