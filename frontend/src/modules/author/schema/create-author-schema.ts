import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const createAuthorSchema = z.object({
  firstName: z.string().min(1).max(100),
  middleName: z.optional(z
    .literal('')
    .or(z.string().min(1).max(100))
  ),
  lastName: z.string().min(1).max(100),
});

export type CreateAuthorSchema = z.infer<typeof createAuthorSchema>;

export const createAuthorSchemaResolver = zodResolver(createAuthorSchema);