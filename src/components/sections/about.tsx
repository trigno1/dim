import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-lg text-foreground/80">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p>
              Welcome to Legal Verse, a premier platform dedicated to fostering legal discourse and providing high-quality, insightful content for legal professionals, students, and enthusiasts alike.
            </p>
            <p>
              Our mission is to demystify the complexities of the law and create a vibrant community where knowledge is shared, and perspectives are enriched. We believe in the power of clear, accessible, and well-researched legal writing to empower and inform.
            </p>
          </div>
          <div className="relative h-48 w-48 justify-self-center">
            <Image
                src="/logo.png"
                alt="Legal Verse logo"
                fill
                className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
