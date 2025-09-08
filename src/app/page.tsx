import Link from 'next/link';
import Image from 'next/image';
import { NameGenerator } from '@/components/name-generator';
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const placeholderLinks = [
  {
    href: '/inspiration',
    title: 'Inspiration',
    description: 'Explore galleries of cute cats.',
    image: 'https://picsum.photos/400/300?random=1',
    aiHint: 'sleeping cat',
  },
  {
    href: '/breeds',
    title: 'Cat Breeds',
    description: 'Learn about different cat breeds.',
    image: 'https://picsum.photos/400/300?random=2',
    aiHint: 'orange cat',
  },
  {
    href: '/gallery',
    title: 'Photo Gallery',
    description: 'A gallery of our favorite felines.',
    image: 'https://picsum.photos/400/300?random=3',
    aiHint: 'playful kitten',
  },
];

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-10 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
          Welcome to <span className="text-primary">KittyName</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The most playful place on the internet to find the purrfect name for
          your cat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Top-left card */}
        <Link href={placeholderLinks[0].href} className="group">
          <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-48">
              <Image
                src={placeholderLinks[0].image}
                alt={placeholderLinks[0].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={placeholderLinks[0].aiHint}
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-headline text-xl">
                    {placeholderLinks[0].title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {placeholderLinks[0].description}
                  </CardDescription>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Top-right name generator */}
        <div className="row-span-2">
          <NameGenerator />
        </div>

        {/* Bottom-left two cards */}
        {placeholderLinks.slice(1).map((link) => (
          <Link href={link.href} key={link.href} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={link.aiHint}
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-headline text-xl">
                      {link.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {link.description}
                    </CardDescription>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
