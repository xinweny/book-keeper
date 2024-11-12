import { ComponentProps } from 'react';

import { Input as I } from '@/components/ui/input';

export function Input({
  ...props
}: ComponentProps<'input'>) {
  return (
    <I {...props} />
  );
}