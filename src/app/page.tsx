import { Suspense } from 'react';
import { ProductGrid } from '@/components/product/product-grid';
import { FilterProduct } from '@/components/product/filter-product';
import { FilterSkeleton, GridSkeleton } from '@/components/product/loading';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">New Arrivals</h1>
          <p className="text-muted-foreground">
            Explore our latest collection of premium essentials....
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="hidden lg:block">
            <Suspense fallback={<FilterSkeleton />}>
              <FilterProduct />
            </Suspense>
          </aside>

          <div className="lg:col-span-3">
            <Suspense fallback={<GridSkeleton />}>
              <ProductGrid searchParams={params} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
