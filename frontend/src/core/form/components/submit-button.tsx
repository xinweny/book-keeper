import { useFormContext } from 'react-hook-form';

import { Button, ButtonProps } from '@/components/ui/button';

export function SubmitButton({
  children = 'Submit',
  ...props
}: ButtonProps) {
  const { formState: { isSubmitting } } = useFormContext();

  return (
    <Button
      {...props}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting
        ? 'Submitting...'
        : children
      }
    </Button>
  );
}