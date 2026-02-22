import { Skeleton } from "@/components/ui/skeleton"

export function GridSkeleton() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        ))}
      </div>
    )
  }
  
  export function FilterSkeleton() {
    return (
      <div className="space-y-8">
        <Skeleton className="h-8 w-full" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-1/2" />
          ))}
        </div>
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }