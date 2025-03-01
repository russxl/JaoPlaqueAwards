import { Skeleton } from "@/components/ui/skeleton"

export function HomeSkeleton() {
  return (
    <div className="w-full">
      {/* Hero Section Skeleton */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted p-6 rounded-lg">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-32 mt-4" />
                <Skeleton className="h-16 w-full mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section Skeleton */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="bg-background rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="h-80 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-6 w-1/2 mt-4" />
                    <div className="mt-4 space-y-2">
                      {[1, 2, 3].map((j) => (
                        <Skeleton key={j} className="h-4 w-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted p-6 rounded-lg space-y-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-20 w-full mx-auto mt-4" />
            <Skeleton className="h-12 w-40 mx-auto mt-8" />
          </div>
        </div>
      </section>
    </div>
  )
} 