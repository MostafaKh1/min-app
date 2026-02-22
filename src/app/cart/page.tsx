'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { selectCartItems } from '@/lib/redux/slice/selectors';
import { EmptyCart } from '@/components/cart/empty-cart';
import { CartList } from '@/components/cart/cart-list';
import { OrderSummary } from '@/components/cart/order-summary';

export default function CartPage() {
  const items = useAppSelector(selectCartItems);

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-10">Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <CartList items={items} />
        </div>

        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
