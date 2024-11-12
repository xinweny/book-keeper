'use client';

import { useForm } from 'react-hook-form';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';

export function BookFiltersForm() {
  const form = useForm();

  const onSubmit = async () => {

  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      className="flex flex-wrap gap-2 items-center"
    >
      <FormField
        
      />
    </Form>
  );
}