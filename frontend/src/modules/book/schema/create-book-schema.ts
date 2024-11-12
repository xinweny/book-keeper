import * as z from 'zod';
import ISBN from 'isbn3';
import { zodResolver } from '@hookform/resolvers/zod';

export const createBookSchema = z.object({
  title: z.string().min(1).max(255),
  authorId: z.number().gt(0),
  genreId: z.number().gt(0),
  isbn: z.string()
    .refine(v => ISBN.parse(v)?.isValid, 'Please enter a valid ISBN number.'),
  publicationDate: z.coerce.date(),
});

export type CreateBookSchema = z.infer<typeof createBookSchema>;

export const createBookSchemaResolver = zodResolver(createBookSchema);