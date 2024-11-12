import { useForm } from 'react-hook-form';

import { Form } from '@/core/form/components/form';

export function CreateBookForm() {
  const form = useForm();

  const onSubmit = async () => {

  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      a
    </Form>
  );
}