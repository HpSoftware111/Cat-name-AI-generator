import Image from 'next/image';
import { PawPrint } from 'lucide-react';

export const metadata = {
  title: 'About Us | KittyName',
  description: 'Learn about the story behind KittyName.',
};

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl">
            About <span className="text-primary">KittyName</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our love for cats, coded into an app.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg">
            <p>
              KittyName started as a simple idea between a group of friends who
              adore cats. We found ourselves constantly brainstorming names for
              new kittens, shelter cats, and even our friends' future pets. We
              wanted to create a fun, joyful, and beautiful space to help others
              find that perfect name.
            </p>
            <p>
              This little project is a labor of love, combining our skills in
              design and development with our passion for felines. Our goal is
              to bring a smile to your face and help you on your journey to
              naming your new companion.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <PawPrint className="h-8 w-8 text-primary" />
              <p className="font-headline text-xl">Happy Naming!</p>
            </div>
          </div>
          <div>
            <Image
              src="https://picsum.photos/600/700?random=50"
              alt="A happy person with a cat"
              width={600}
              height={700}
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="beautiful cat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
