import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { blogPosts } from '@/lib/placeholder-data';
import { PageTransition } from '@/components/page-transition';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
      <Header />
      <main className="py-12 md:py-20">
        <article className="container mx-auto px-4 md:px-6 max-w-3xl">
          <header className="mb-8">
            <div className="relative h-72 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="font-headline text-3xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
            <p className="text-muted-foreground text-lg">{post.excerpt}</p>
          </header>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              This is where the full content of the blog post would go. For now, we're using placeholder text to give you a feel for the layout. The actual content would be fetched from a CMS or a local markdown file.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote>
              "The law is reason, free from passion." - Aristotle
            </blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </PageTransition>
  );
}
