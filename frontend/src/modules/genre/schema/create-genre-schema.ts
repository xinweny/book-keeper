import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const createGenreSchema = z.object({
  name: z.string().min(1).max(100),
});

export type CreateGenreSchema = z.infer<typeof createGenreSchema>;

export const createGenreSchemaResolver = zodResolver(createGenreSchema);