import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const usefulLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#blog', label: 'Blogs' },
  { href: '#projects', label: 'What people say about us' },
  { href: '#contact', label: 'Contact' },
  { href: '/submit-blog', label: 'Submit your own blog' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground w-full pt-20 pb-8 relative border-t-2 border-white">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary rounded-full p-2 border-4 border-background">
         <Image src="/logo.png" alt="Legal Verse Logo" width={48} height={48} className="bg-background rounded-full p-1" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          
          {/* Empty spacer div to push other columns */}
          <div className="hidden md:block"></div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Connect</h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:example@example.com" aria-label="Email">
                    <Mail className="h-6 w-6" />
                  </Link>
                </Button>
            </div>
          </div>
          
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-muted-foreground order-1 md:order-1">
            © {new Date().getFullYear()} Legal Verse. All rights reserved.
          </p>
          <div className="flex items-center gap-2 order-2 md:order-2 text-center">
            <p className="text-muted-foreground">Designed & Managed by Tanish sunita pareek</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
