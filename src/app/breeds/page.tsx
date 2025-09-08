import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Cat Breeds | KittyName',
  description: 'Learn about the wonderful world of cat breeds.',
};

const breeds = [
  { name: 'Siamese', origin: 'Thailand', hint: 'siamese cat' },
  { name: 'Persian', origin: 'Iran (Persia)', hint: 'persian cat' },
  { name: 'Maine Coon', origin: 'United States', hint: 'maine coon' },
  { name: 'Ragdoll', origin: 'United States', hint: 'ragdoll cat' },
  { name: 'Bengal', origin: 'United States', hint: 'bengal cat' },
  { name: 'Sphynx', origin: 'Canada', hint: 'sphynx cat' },
];

export default function BreedsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="relative mb-12 text-center">
        <div className="absolute top-0 right-0">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
        <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl">
          Explore <span className="text-primary">Breeds</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Discover the unique characteristics of different cat breeds.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {breeds.map((breed, i) => (
          <Card key={breed.name} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={`https://picsum.photos/400/250?random=${20 + i}`}
                alt={breed.name}
                width={400}
                height={250}
                className="w-full object-cover"
                data-ai-hint={breed.hint}
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-headline">{breed.name}</CardTitle>
              <CardDescription>Origin: {breed.origin}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}