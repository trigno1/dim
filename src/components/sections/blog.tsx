import { blogPosts } from '@/lib/placeholder-data';
import { BlogCard } from '@/components/ui/blog-card';
import { Button } from '@/components/ui/button';

export function Blog() {
  return (
    <section id="blog" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            From the Journal
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            My latest thoughts on law, life, and the pursuit of justice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">Load More Posts</Button>
        </div>
      </div>
    </section>
  );
}
