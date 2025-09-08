import { PawPrint } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <PawPrint className="h-5 w-5" />
          <p>Built with purr-fection for KittyName.</p>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} KittyName. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
