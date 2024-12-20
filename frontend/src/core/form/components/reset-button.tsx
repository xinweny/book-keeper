import { useFormContext, FieldValues } from 'react-hook-form';

import { Button, ButtonProps } from '@/components/ui/button';

interface ResetButtonProps<T extends FieldValues> extends ButtonProps {
  defaultValues: T;
}

export function ResetButton<T extends FieldValues>({
  defaultValues,
  children = 'Reset',
  ...props
}: ResetButtonProps<T>) {
  const { reset } = useFormContext<T>();

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={() => {
        reset(defaultValues);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}