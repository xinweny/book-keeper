import { useFormContext } from 'react-hook-form';

import { Button, ButtonProps } from '@/components/ui/button';

export function SubmitButton({
  children = 'Submit',
  ...props
}: ButtonProps) {
  const { formState } = useFormContext();

  return (
    <Button
      {...props}
      type="submit"
      disabled={!formState.isDirty || formState.isSubmitting}
    >
      {children}
    </Button>
  );
}