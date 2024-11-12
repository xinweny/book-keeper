import * as z from 'zod';
import ISBN from 'isbn3';

export const getBooksSchema = z.object({
  title: z.optional(z.string().min(1)),
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