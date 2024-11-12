import { UseFormReturn, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/cn';

import { Form as F } from '@/components/ui/form';

interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  className?: string;
}

export function Form<T extends FieldValues>({
  form,
  children,
  onSubmit,
  className,
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