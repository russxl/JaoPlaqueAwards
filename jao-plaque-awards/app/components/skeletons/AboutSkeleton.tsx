import { Skeleton } from "@/app/components/ui/skeleton"

export function AboutSkeleton() {
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

      {/* Mission Section Skeleton */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-32 w-full" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-4/6" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg space-y-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Skeleton */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto mt-4" />
          </div>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-w-3 aspect-h-3 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-32 mx-auto" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section Skeleton */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-32 w-full mt-4" />
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-24 sm:ml-8" />
              <Skeleton className="h-8 w-24 sm:ml-8" />
            </div>
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