import { UseFormReturn, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/cn';

import { Button } from '@/components/ui/button';
import { Form as F } from '@/components/ui/form';

interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  className?: string;
  submitLabel?: string;
  reset?: () => void;
}

export function Form<T extends FieldValues>({
  form,
  children,
  onSubmit,
  className,
  submitLabel = 'Submit',
  reset,
}: FormProps<T>) {
  return (
    <F {...form}>
      <form
        className={cn(
          'flex flex-col gap-4',
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </F>
  );
}