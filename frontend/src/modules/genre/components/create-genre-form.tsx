import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { CreateGenreSchema, createGenreSchemaResolver } from '../schema/create-genre-schema';

import { useCreateGenreMutation } from '../hooks/use-create-genre-mutation';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';
import { Input } from '@/core/form/components/input';
import { SubmitButton } from '@/core/form/components/submit-button';

const defaultValues = {
  name: '',
};

export function CreateGenreForm() {
  const {
    mutateAsync: createGenre,
    isSuccess,
  } = useCreateGenreMutation();

  const form = useForm<CreateGenreSchema>({
    defaultValues,
    resolver: createGenreSchemaResolver,
  });

  const onSubmit = async (data: CreateGenreSchema) => {
    await createGenre(data);

    if (isSuccess) {
      toast.success('Genre successfully created.');
      form.reset(defaultValues);
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormField
        name="name"
        label="Name"
        render={({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
          />
        )}
        required
      />
      <SubmitButton />
    </Form>
  );
}