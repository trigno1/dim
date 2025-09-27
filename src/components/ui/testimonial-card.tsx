import Image from 'next/image';
import type { Testimonial } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col p-6 text-center bg-background/80 backdrop-blur-sm">
        <CardHeader className="p-0 mb-4">
            <Quote className="w-8 h-8 text-primary mx-auto" />
        </CardHeader>
        <CardContent className="flex-grow p-0">
            <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
        </CardContent>
        <div className="mt-6">
            <Avatar className="w-16 h-16 mx-auto mb-2">
                <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
        </div>
    </Card>
  );
}
