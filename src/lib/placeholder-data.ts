import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const img = PlaceHolderImages.find(p => p.id === id);
  if (!img) throw new Error(`Image with id ${id} not found.`);
  return img;
};

export const blogPosts = [
  {
    slug: 'first-ascent-a-new-beginning',
    title: 'First Ascent: A New Beginning',
    excerpt: 'Join me as I embark on a new journey, sharing my passions for technology, nature, and creative expression. This is the first step up the mountain.',
    image: getImage('blog-1'),
    tags: ['Personal', 'Intro'],
  },
  {
    slug: 'the-art-of-minimalist-design',
    title: 'The Art of Minimalist Design',
    excerpt: 'Exploring the principles of minimalism in web design and how "less is more" can lead to more engaging and user-friendly experiences.',
    image: getImage('blog-2'),
    tags: ['Design', 'Web Dev'],
  },
  {
    slug: 'tales-from-the-trail-lessons-learned',
    title: 'Tales from the Trail: Lessons Learned',
    excerpt: 'Recounting a recent hiking adventure and the valuable life lessons discovered amidst the beauty and challenges of the great outdoors.',
    image: getImage('blog-3'),
    tags: ['Hiking', 'Life'],
  },
  {
    slug: 'code-and-creativity-a-developers-dichotomy',
    title: 'Code & Creativity: A Developer\'s Dichotomy',
    excerpt: 'A deep dive into how the logical world of programming and the boundless realm of creativity can coexist and even enhance one another.',
    image: getImage('blog-4'),
    tags: ['Tech', 'Creativity'],
  },
];

export const projects = [
  {
    title: 'Project Apex',
    description: 'A comprehensive web application designed to streamline project management for creative teams. Built with Next.js and Tailwind CSS.',
    image: getImage('project-1'),
    link: '#',
  },
  {
    title: 'Vista Photography',
    description: 'A personal photography portfolio showcasing stunning landscapes from travels around the world. Focus on composition and light.',
    image: getImage('project-2'),
    link: '#',
  },
  {
    title: 'Evergreen Branding',
    description: 'A complete branding and identity design for an eco-friendly startup. Included logo design, color palette, and style guide.',
    image: getImage('project-3'),
    link: '#',
  },
];

export type Blog = typeof blogPosts[0];
export type Project = typeof projects[0];
