import Image from 'next/image';

export const metadata = {
  title: 'Gallery | KittyName',
  description: 'A beautiful gallery of our favorite feline friends.',
};

export default function GalleryPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl">
          The Cat <span className="text-primary">Gallery</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Enjoy our curated collection of stunning cat photography.
        </p>
      </div>
      <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={`https://picsum.photos/seed/${
                i + 30
              }/600/${Math.floor(Math.random() * 200) + 400}`}
              alt={`Gallery cat ${i + 1}`}
              width={600}
              height={400}
              className="h-auto w-full rounded-lg object-cover shadow-md"
              data-ai-hint="beautiful cat"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
