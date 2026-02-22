'use client';

import { CartItem as CartItemComponent } from './cart-item';
import { CartItem } from '@/lib/type';

export function CartList({ items }: { items: CartItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
