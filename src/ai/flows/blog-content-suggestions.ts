'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating blog content suggestions, including titles, excerpts, and thumbnail descriptions.
 *
 * - `generateBlogContentSuggestions` -  The main function to trigger the content generation flow.
 * - `BlogContentSuggestionsInput` - The input type for the content generation flow.
 * - `BlogContentSuggestionsOutput` - The output type for the content generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogContentSuggestionsInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post.'),
  keywords: z.string().describe('Comma-separated keywords related to the blog post.'),
  style: z.string().describe('The desired style or tone of the blog post (e.g., informative, humorous, technical).'),
});

export type BlogContentSuggestionsInput = z.infer<typeof BlogContentSuggestionsInputSchema>;

const BlogContentSuggestionsOutputSchema = z.object({
  titleSuggestions: z.array(z.string()).describe('An array of suggested blog post titles.'),
  excerptSuggestions: z.array(z.string()).describe('An array of suggested excerpts for the blog post.'),
  thumbnailDescriptionSuggestions: z.array(z.string()).describe('An array of suggested descriptions for the thumbnail image.'),
});

export type BlogContentSuggestionsOutput = z.infer<typeof BlogContentSuggestionsOutputSchema>;


export async function generateBlogContentSuggestions(input: BlogContentSuggestionsInput): Promise<BlogContentSuggestionsOutput> {
  return blogContentSuggestionsFlow(input);
}

const blogContentSuggestionsPrompt = ai.definePrompt({
  name: 'blogContentSuggestionsPrompt',
  input: {schema: BlogContentSuggestionsInputSchema},
  output: {schema: BlogContentSuggestionsOutputSchema},
  prompt: `You are a creative content strategist specializing in blog posts. Generate compelling titles, excerpts, and thumbnail descriptions based on the provided topic, keywords, and style.

Topic: {{{topic}}}
Keywords: {{{keywords}}}
Style: {{{style}}}

Provide at least 3 suggestions for each category. Be concise and creative.
`,
});

const blogContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'blogContentSuggestionsFlow',
    inputSchema: BlogContentSuggestionsInputSchema,
    outputSchema: BlogContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await blogContentSuggestionsPrompt(input);
    return output!;
  }
);
