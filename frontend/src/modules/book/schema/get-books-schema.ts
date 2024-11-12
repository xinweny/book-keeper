import * as z from 'zod';
import ISBN from 'isbn3';
import { zodResolver } from '@hookform/resolvers/zod';

export const getBooksSchema = z.object({
  title: z.optional(z.string()),
  authorId: z.optional(z.number().gt(0)),
  genreId: z.optional(z.number().gt(0)),
  isbn: z.optional(z.string()
    .refine(v => ISBN.parse(v)?.isValid, 'Please enter a valid ISBN number.')
  ),
  publicationDate: z.object({
    from: z.optional(z.coerce.date()),
    to: z.optional(z.coerce.date()),
  }),
});

export type GetBooksSchema = z.infer<typeof getBooksSchema>;

export const getBooksSchemaResolver = zodResolver(getBooksSchema);