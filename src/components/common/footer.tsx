import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Twitter, Github, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-background w-full">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alpine Ascent. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Button key={label} variant="ghost" size="icon" asChild>
                <Link href={href} aria-label={label}>
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
