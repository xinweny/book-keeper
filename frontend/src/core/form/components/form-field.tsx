import { ReactElement, JSXElementConstructor } from 'react';
import {
  FieldValues,
  useFormContext,
  Path,
  ControllerRenderProps,
} from 'react-hook-form';

import { cn } from '@/lib/cn';

import {
  FormField as Field,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  render: (field: ControllerRenderProps<T, Path<T>>) => ReactElement<any, string | JSXElementConstructor<any>>;
  label?: string;
  description?: string;
  className?: string;
}

export function FormField<T extends FieldValues>({
  name,
  label,
  render,
  description,
  className,
}: FormFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Field
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          {label && (
            <FormLabel className="font-semibold">{label}</FormLabel>
          )}
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormControl>
            {render(field)}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}