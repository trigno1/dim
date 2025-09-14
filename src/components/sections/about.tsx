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
              Hello! I'm Jane, the voice and vision behind Alpine Ascent. By day, I'm a passionate software developer, crafting clean code and intuitive digital experiences. By night (and on weekends), I'm an avid explorer of both the natural world and the vast landscapes of literature.
            </p>
            <p>
              This blog is a convergence of my worlds. It's a space where I document my technical explorations, share stories from my travels, and reflect on the creative process. 'Alpine Ascent' symbolizes the constant climb towards growth, knowledge, and new perspectives—whether it's summiting a mountain or mastering a new technology.
            </p>
            <p>
              My goal is to create a community of curious minds. I hope my writing inspires you to learn, create, and explore your own passions. Thanks for joining me on this climb!
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
