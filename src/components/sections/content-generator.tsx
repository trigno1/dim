'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  generateBlogContentSuggestions,
  BlogContentSuggestionsInput,
  BlogContentSuggestionsOutput,
} from '@/ai/flows/blog-content-suggestions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BrainCircuit, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  topic: z.string().min(3, { message: 'Topic must be at least 3 characters long.' }),
  keywords: z.string().min(3, { message: 'Please provide some keywords.' }),
  style: z.string(),
});

export function ContentGenerator() {
  const [suggestions, setSuggestions] = useState<BlogContentSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      keywords: '',
      style: 'Informative',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await generateBlogContentSuggestions(values as BlogContentSuggestionsInput);
      setSuggestions(result);
    } catch (error) {
      console.error('Error generating suggestions:', error);
      toast({
        title: 'Error Generating Suggestions',
        description: 'There was a problem communicating with the AI. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tools" className="bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <BrainCircuit className="w-8 h-8 text-primary" />
            AI Content Sherpa
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Stuck on a blank page? Let AI help you start the climb.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Generate Blog Ideas</CardTitle>
              <CardDescription>Fill out the details to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Blog Topic</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., The future of contract law" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Smart Contracts, AI, Legal Tech" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Writing Style</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a style" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Informative">Informative</SelectItem>
                            <SelectItem value="Persuasive">Persuasive</SelectItem>
                            <SelectItem value="Formal">Formal</SelectItem>
                            <SelectItem value="Analytical">Analytical</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                    ) : (
                      <><Sparkles className="mr-2 h-4 w-4" /> Generate Ideas</>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {isLoading && (
                <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full min-h-[400px]">
                    <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground font-semibold">Generating brilliant ideas...</p>
                </div>
            )}
            {!isLoading && !suggestions && (
               <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full min-h-[400px]">
                    <Sparkles className="h-12 w-12 text-primary mb-4" />
                    <p className="text-muted-foreground font-semibold">Your AI-powered suggestions will appear here.</p>
                </div>
            )}
            {suggestions && (
              <div className="space-y-6">
                <SuggestionCategory title="Title Suggestions" items={suggestions.titleSuggestions} />
                <SuggestionCategory title="Excerpt Suggestions" items={suggestions.excerptSuggestions} />
                <SuggestionCategory title="Thumbnail Descriptions" items={suggestions.thumbnailDescriptionSuggestions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuggestionCategory({ title, items }: { title: string, items: string[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
    )
}
