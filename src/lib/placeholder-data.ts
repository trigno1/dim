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
    author: 'Jane Doe',
  },
  {
    slug: 'understanding-intellectual-property',
    title: 'A Beginner\'s Guide to Intellectual Property',
    excerpt: 'Demystifying the world of patents, trademarks, and copyrights. Learn how to protect your creative and intellectual assets.',
    image: getImage('blog-2'),
    tags: ['IP Law', 'Startups'],
    author: 'John Smith',
  },
  {
    slug: 'navigating-corporate-law',
    title: 'Navigating the Complexities of Corporate Law',
    excerpt: 'Key considerations for business owners, from entity formation to corporate governance and compliance.',
    image: getImage('blog-3'),
    tags: ['Corporate Law', 'Business'],
    author: 'Emily White',
  },
  {
    slug: 'the-art-of-negotiation',
    title: 'The Art of Negotiation: Strategies for Legal Professionals',
    excerpt: 'A deep dive into effective negotiation tactics and communication skills essential for achieving favorable outcomes.',
    image: getImage('blog-4'),
    tags: ['Skills', 'Negotiation'],
    author: 'Michael Brown',
  },
];

export const testimonials = [
  {
    quote: "Contributing to Legal Verse has been a fantastic experience. The platform is professional, the editorial team is supportive, and it has significantly boosted my online presence.",
    name: "Dr. Alisha Sharma",
    designation: "Legal Scholar",
    avatar: getImage('avatar-1'),
  },
  {
    quote: "As a law student, I find the articles on Legal Verse incredibly insightful and well-written. It's an indispensable resource for my studies and career preparation.",
    name: "Rahul Verma",
    designation: "Law Student",
    avatar: getImage('avatar-2'),
  },
  {
    quote: "The submission process was straightforward, and my article was published promptly. I appreciate the opportunity to share my expertise with a broader audience.",
    name: "Adv. Priyanka Singh",
    designation: "Advocate",
    avatar: getImage('avatar-3'),
  },
   {
    quote: "A brilliant platform for anyone interested in the nuances of law. The quality of content is consistently high, and the topics are always relevant and engaging.",
    name: "Prof. David Chen",
    designation: "University Professor",
    avatar: getImage('avatar-4'),
  },
];


export type Blog = typeof blogPosts[0];
export type Testimonial = typeof testimonials[0];
