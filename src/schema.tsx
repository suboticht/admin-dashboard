import { z } from 'zod';

export const schema = z.object({
  firstName: z.string().min(3, 'First Name is required'),
  lastName: z.string().min(3, 'Last Name is required'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'You must be at least 18 years old'),
});

export type FormData = z.infer<typeof schema>;
