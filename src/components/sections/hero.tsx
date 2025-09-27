"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-legal');

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden p-0 flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6">
            <Image src="/logo.png" alt="Legal Verse Logo" width={128} height={128} />
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-shadow">
            Legal Verse
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-mono tracking-wider uppercase text-shadow">
            DURA LEX SED LEX
          </p>
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"
      />
    </section>
  );
}
