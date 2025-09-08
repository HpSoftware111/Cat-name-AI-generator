import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Inspiration | KittyName',
  description: 'Get inspired with our gallery of cute and funny cats.',
};

export default function InspirationPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl">
          Cat <span className="text-primary">Inspiration</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Sometimes, all you need is to look at a cute cat to find the perfect
          name.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={`https://picsum.photos/600/400?random=${10 + i}`}
                alt={`Inspirational cat ${i + 1}`}
                width={600}
                height={400}
                className="object-cover"
                data-ai-hint="cute kitten"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
