'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Search } from 'lucide-react';
import { CATEGORIES } from '@/lib/data';
import { useProductFilters } from './hooks/use-product-filters';

export function FilterProduct() {
  const {
    currentCategory,
    searchValue,
    minPrice,
    maxPrice,
    isPending,
    handleSearch,
    updateFilters,
    clearFilters,
  } = useProductFilters();

  return (
    <div className="space-y-8 sticky top-24">
      <div>
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
          Search
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-9"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
          Categories
        </h3>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => updateFilters({ category })}
              className={`text-left text-sm py-1.5 transition-colors hover:text-primary ${
                currentCategory === category
                  ? 'font-semibold text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Price Range
          </h3>
          <span className="text-xs font-medium">$0 — $500</span>
        </div>
        <Slider
          defaultValue={[minPrice, maxPrice]}
          max={500}
          step={10}
          onValueCommit={(value) =>
            updateFilters({ minPrice: value[0], maxPrice: value[1] })
          }
          className="mb-6"
        />
      </div>

      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={clearFilters}
        disabled={isPending}
      >
        Clear All Filters
      </Button>
    </div>
  );
}
