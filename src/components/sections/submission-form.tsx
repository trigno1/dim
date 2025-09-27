'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  contactInfo: z.string().optional(),
  linkedinUrl: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  articleTitle: z.string().min(10, { message: 'Title must be at least 10 characters.' }),
  topic: z.string().min(3, { message: 'Please specify a topic or category.' }),
  articleFile: z.any().refine(files => files?.length === 1, 'Article file is required.'),
  notes: z.string().optional(),
});

export function SubmissionForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      contactInfo: '',
      linkedinUrl: '',
      articleTitle: '',
      topic: '',
      notes: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: 'Article Submitted!',
      description: "Thanks for your submission. We'll review it and get back to you soon.",
    });
    form.reset();
  };

  return (
    <Card>
        <CardHeader>
            <CardTitle>Submission Form</CardTitle>
            <CardDescription>Fill out the form below to submit your work.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Your Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="contactInfo"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Contact Info (Optional)</FormLabel>
                        <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="linkedinUrl"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>LinkedIn Profile URL (Optional)</FormLabel>
                        <FormControl>
                        <Input placeholder="https://www.linkedin.com/in/your-profile/" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="articleTitle"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Article Title</FormLabel>
                        <FormControl>
                        <Input placeholder="The Title of Your Article" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Topic / Category</FormLabel>
                        <FormControl>
                        <Input placeholder="e.g., Corporate Law, Intellectual Property" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="articleFile"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Upload File (.doc, .pdf)</FormLabel>
                        <FormControl>
                            <Input type="file" accept=".doc,.docx,.pdf" onChange={e => field.onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Additional Message / Notes (Optional)</FormLabel>
                        <FormControl>
                        <Textarea placeholder="Any notes for the editor..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <div className="text-center">
                    <Button type="submit" size="lg">Submit Article</Button>
                </div>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
