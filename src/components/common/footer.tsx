import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Mail, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#blog', label: 'Our Blogs' },
  { href: '/#contribute', label: 'How to Contribute' },
  { href: '/publish-with-us', label: 'Submit Now' },
  { href: '/#contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

const socialLinks = [
    { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
    { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
    { href: '#', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
    { href: 'mailto:contact@legalverse.com', icon: <Mail className="h-5 w-5" />, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground w-full pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm items-start">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold mb-4 text-white">
                    <Image src="/logo.png" alt="Legal Verse Logo" width={32} height={32} />
                    <span>Legal Verse</span>
                </Link>
                <p className="text-white/80">Fostering legal discourse and empowering professionals through insightful content.</p>
            </div>
            
            <div className="md:col-span-2">
                <h3 className="font-semibold text-lg mb-4 text-white text-center md:text-left">Quick Links</h3>
                <ul className="grid grid-cols-2 gap-2 text-white/80">
                {quickLinks.map(link => (
                    <li key={link.label}>
                    <Link href={link.href} className="text-current hover:text-white transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            
            <div className="md:col-span-1">
                <h3 className="font-semibold text-lg mb-4 text-white text-center md:text-left">Follow Us</h3>
                <div className="flex items-center justify-center md:justify-start gap-4">
                    {socialLinks.map(link => (
                        <Button key={link.label} variant="ghost" size="icon" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                            <Link href={link.href} aria-label={link.label}>
                                {link.icon}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>

        <Separator className="my-6 bg-border/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">
            <p>© {new Date().getFullYear()} Legal Verse. All rights reserved.</p>
            <p>Designed & Managed by Tanish sunita pareek</p>
        </div>
      </div>
    </footer>
  );
}
