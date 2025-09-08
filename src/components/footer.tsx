import { PawPrint, Phone, Send, Users, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <p className="font-headline text-lg">KittyName</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with purr-fection for cat lovers.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KittyName. All rights reserved.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Get in Touch
                </h3>
                <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-medium">Whatsapp:</span>
                    <a
                      href="https://wa.me/19714298126"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 971 429 8126
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Send className="h-5 w-5 text-primary" />
                    <span className="font-medium">Telegram:</span>
                    <a
                      href="https://t.me/apple_team94"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @apple_team94
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Collaborate
                </h3>
                <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Discord:</span>
                    <span className="text-muted-foreground">skill_union.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-medium">Teams:</span>
                    <a
                      href="mailto:hppsoftwaredev@outlook.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      hppsoftwaredev@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
