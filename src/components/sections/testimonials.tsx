import { projects } from '@/lib/placeholder-data';
import { ProjectCard } from '@/components/ui/project-card';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            What People Say About Us
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            A selection of projects I'm proud to have built.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
