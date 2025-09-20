import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutIllustration = PlaceHolderImages.find(p => p.id === 'about-illustration');

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-4 text-lg text-foreground/80">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Little About My Journey
            </h2>
            <p>
              Welcome to Legal Verse. I'm Jane Doe, a legal professional navigating the intricate world of law and its intersection with our daily lives. This is my space to demystify complex legal topics and share my personal insights.
            </p>
            <p>
              This blog is a convergence of my professional expertise and my passion for clear communication. It's a platform where I document my thoughts on emerging legal trends, break down landmark cases, and reflect on the ethical dimensions of the law.
            </p>
            <p>
              My goal is to create a community of informed and engaged individuals. I hope my writing empowers you with a clearer understanding of the legal landscape. Thank you for joining me on this journey.
            </p>
          </div>
          <div className="relative h-64 w-64 md:h-80 md:w-80 justify-self-center">
            {aboutIllustration && (
              <Image
                src={aboutIllustration.imageUrl}
                alt={aboutIllustration.description}
                data-ai-hint={aboutIllustration.imageHint}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
