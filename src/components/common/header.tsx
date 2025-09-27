"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#contribute', label: 'How to Contribute' },
  { href: '/#blog', label: 'Our Blogs' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/publish-with-us', label: 'Submit Now' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="text-sm font-medium transition-colors hover:text-primary-foreground"
    >
      {link.label}
    </Link>
  ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 text-white">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold">
          <Image src="/logo.png" alt="Legal Verse Logo" width={24} height={24} />
          <span className={cn(hasScrolled ? 'text-foreground' : 'text-white')}>Legal Verse</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("text-sm font-medium transition-colors hover:text-primary-foreground/80", hasScrolled ? 'text-foreground' : 'text-white')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(hasScrolled ? 'text-foreground' : 'text-white', "hover:bg-white/10")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
                   <Image src="/logo.png" alt="Legal Verse Logo" width={24} height={24} />
                  <span>Legal Verse</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
