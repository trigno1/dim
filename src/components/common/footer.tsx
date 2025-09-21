import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const practiceAreasCol1 = [
  { href: '#', label: 'Corporate Law' },
  { href: '#', label: 'Intellectual Property' },
  { href: '#', label: 'Family Law' },
  { href: '#', label: 'Criminal Law' },
  { href: '#', label: 'Real Estate Law' },
  { href: '#', label: 'Tax Law' },
];

const practiceAreasCol2 = [
    { href: '#', label: 'Immigration Law' },
    { href: '#', label: 'Labor Law' },
    { href: '#', label: 'Environmental Law' },
    { href: '#', label: 'Bankruptcy Law' },
    { href: '#', label: 'Civil Rights' },
    { href: '#', label: 'Mergers & Acquisitions' },
];

const legalResources = [
  { href: '#', label: 'Case Law Database' },
  { href: '#', label: 'Legal Dictionary' },
  { href: '#', label: 'Statutes & Codes' },
  { href: '#', label: 'Legal Forms' },
  { href: '#', label: 'Bar Associations' },
  { href: '#', label: 'Legal News' },
];

const usefulLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#blog', label: 'Blogs' },
  { href: '#projects', label: 'Testimonials' },
  { href: '/submit-blog', label: 'Submit your own blog' },
];


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground w-full pt-20 pb-8 relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary rounded-full p-2 border-4 border-background">
         <Image src="/logo.png" alt="Legal Verse Logo" width={48} height={48} className="bg-background rounded-full p-1" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>123 Legal Avenue, Lawsville, LS 45678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 shrink-0" />
                <a href="mailto:contact@legalverse.com" className="hover:text-primary-foreground transition-colors">contact@legalverse.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-foreground transition-colors">+1 (234) 567-890</a>
              </li>
               <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1 shrink-0" />
                <span>Mon - Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Practice Areas</h3>
            <div className="grid grid-cols-2 gap-x-4">
                <ul className="space-y-2 text-muted-foreground">
                {practiceAreasCol1.map(link => (
                    <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                {practiceAreasCol2.map(link => (
                    <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Legal Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              {legalResources.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Useful Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              {usefulLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary-foreground" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:example@example.com" aria-label="Email">
                    <Mail className="h-6 w-6 text-muted-foreground hover:text-primary-foreground" />
                  </Link>
                </Button>
            </div>
          </div>
          
        </div>

        <Separator className="my-6 bg-border/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-muted-foreground order-last md:order-first">
            © {new Date().getFullYear()} Legal Verse. All rights reserved.
          </p>
          <div className="flex items-center gap-2 order-first md:order-last text-center">
            <p className="text-muted-foreground">Designed & Managed by Tanish sunita pareek</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
