import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useEffect, useState, useCallback } from 'react';
import { useDebounceValue } from 'usehooks-ts';

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentCategory = searchParams.get('category') || 'All';
  const currentQuery = searchParams.get('query') || '';
  const minPrice = Number(searchParams.get('minPrice')) || 0;
  const maxPrice = Number(searchParams.get('maxPrice')) || 500;

  const [searchValue, setSearchValue] = useState(currentQuery);
  const [debouncedQuery] = useDebounceValue(searchValue, 500);

  const updateFilters = useCallback(
    (updates: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === 'All' || value === '') {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      startTransition(() => {
        router.push(`/?${params.toString()}`, { scroll: false });
      });
    },
    [router, searchParams]
  );

  useEffect(() => {
    if (debouncedQuery !== currentQuery) {
      updateFilters({ query: debouncedQuery });
    }
  }, [debouncedQuery, currentQuery, updateFilters]);

  useEffect(() => {
    setSearchValue(currentQuery);
  }, [currentQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearFilters = () => {
    router.push('/');
  };

  return {
    // Current filter values
    currentCategory,
    searchValue,
    minPrice,
    maxPrice,
    isPending,
    // Handlers
    handleSearch,
    updateFilters,
    clearFilters,
  };
}
