"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const mountainImage = PlaceHolderImages.find(p => p.id === 'hero-mountain');
  const authorAvatar = PlaceHolderImages.find(p => p.id === 'author-avatar');

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden p-0">
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        {mountainImage && (
          <Image
            src={mountainImage.imageUrl}
            alt={mountainImage.description}
            data-ai-hint={mountainImage.imageHint}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground p-4">
        <div className="fade-in-up">
          {authorAvatar && (
            <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-background shadow-lg">
              <AvatarImage src={authorAvatar.imageUrl} alt="Author Avatar" data-ai-hint={authorAvatar.imageHint} />
              <AvatarFallback>LV</AvatarFallback>
            </Avatar>
          )}
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Legal Verse
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
            A personal journey through the world of law.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link href="#blog">Read The Blog</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ArrowDown className="h-6 w-6 text-foreground animate-bounce" />
      </div>
    </section>
  );
}
