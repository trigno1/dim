import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './badge';

interface BlogCardProps {
  post: Blog;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.image.imageUrl}
            alt={post.title}
            data-ai-hint={post.image.imageHint}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <CardHeader>
        <div className="flex gap-2 mb-2">
          {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0">
          <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
