import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const img = PlaceHolderImages.find(p => p.id === id);
  if (!img) throw new Error(`Image with id ${id} not found.`);
  return img;
};

export const blogPosts = [
  {
    slug: 'the-rise-of-legal-tech',
    title: 'The Rise of Legal Tech and Its Impact on Modern Law',
    excerpt: 'Exploring how technology is reshaping the legal landscape, from AI-powered research to virtual courtrooms.',
    image: getImage('blog-1'),
    tags: ['Legal Tech', 'Innovation'],
  },
  {
    slug: 'understanding-intellectual-property',
    title: 'A Beginner\'s Guide to Intellectual Property',
    excerpt: 'Demystifying the world of patents, trademarks, and copyrights. Learn how to protect your creative and intellectual assets.',
    image: getImage('blog-2'),
    tags: ['IP Law', 'Startups'],
  },
  {
    slug: 'navigating-corporate-law',
    title: 'Navigating the Complexities of Corporate Law',
    excerpt: 'Key considerations for business owners, from entity formation to corporate governance and compliance.',
    image: getImage('blog-3'),
    tags: ['Corporate Law', 'Business'],
  },
  {
    slug: 'the-art-of-negotiation',
    title: 'The Art of Negotiation: Strategies for Legal Professionals',
    excerpt: 'A deep dive into effective negotiation tactics and communication skills essential for achieving favorable outcomes.',
    image: getImage('blog-4'),
    tags: ['Skills', 'Negotiation'],
  },
];

export const projects = [
  {
    title: 'Pro Bono Portal',
    description: 'A web platform connecting volunteer lawyers with non-profit organizations in need of legal assistance.',
    image: getImage('project-1'),
    link: '#',
  },
  {
    title: 'Contract Analyzer AI',
    description: 'An AI-powered tool that reviews legal contracts, identifies key clauses, and highlights potential risks.',
    image: getImage('project-2'),
    link: '#',
  },
  {
    title: 'Legal Education Series',
    description: 'A series of animated videos explaining complex legal concepts to the general public in an accessible way.',
    image: getImage('project-3'),
    link: '#',
  },
];

export type Blog = typeof blogPosts[0];
export type Project = typeof projects[0];
