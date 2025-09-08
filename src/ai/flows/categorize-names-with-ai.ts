'use server';
/**
 * @fileOverview A flow that categorizes names based on AI.
 *
 * - categorizeName - A function that categorizes a given name.
 * - CategorizeNameInput - The input type for the categorizeName function.
 * - CategorizeNameOutput - The return type for the categorizeName function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeNameInputSchema = z.object({
  name: z.string().describe('The name to categorize.'),
});
export type CategorizeNameInput = z.infer<typeof CategorizeNameInputSchema>;

const CategorizeNameOutputSchema = z.object({
  category: z
    .string()
    .describe(
      'The category of the name (e.g., cute, warrior, funny). If the name does not fit into any of these categories, return "general".'
    ),
});
export type CategorizeNameOutput = z.infer<typeof CategorizeNameOutputSchema>;

export async function categorizeName(input: CategorizeNameInput): Promise<CategorizeNameOutput> {
  return categorizeNameFlow(input);
}

const categorizeNamePrompt = ai.definePrompt({
  name: 'categorizeNamePrompt',
  input: {schema: CategorizeNameInputSchema},
  output: {schema: CategorizeNameOutputSchema},
  prompt: `You are an AI assistant that categorizes names into one of the following categories: cute, warrior, or funny.
If the name does not clearly fit into any of these categories, then label it as "general".

Name: {{{name}}}
Category:`,
});

const categorizeNameFlow = ai.defineFlow(
  {
    name: 'categorizeNameFlow',
    inputSchema: CategorizeNameInputSchema,
    outputSchema: CategorizeNameOutputSchema,
  },
  async input => {
    const {output} = await categorizeNamePrompt(input);
    return output!;
  }
);
