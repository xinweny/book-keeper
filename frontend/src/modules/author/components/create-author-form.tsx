import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { CreateAuthorSchema, createAuthorSchemaResolver } from '../schema/create-author-schema';

import { useCreateAuthorMutation } from '../hooks/use-create-author-mutation';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';
import { Input } from '@/core/form/components/input';
import { SubmitButton } from '@/core/form/components/submit-button';

const defaultValues = {
  firstName: '',
  middleName: '',
  lastName: '',
};

export function CreateAuthorForm() {
  const {
    mutateAsync: createAuthor,
  } = useCreateAuthorMutation({
    onSuccess: () => {
      toast.success('Author successfully created.');
      form.reset(defaultValues);
    },
  });

  const form = useForm<CreateAuthorSchema>({
    defaultValues,
    resolver: createAuthorSchemaResolver,
  });

  const onSubmit = async (data: CreateAuthorSchema) => {
    await createAuthor({
      first_name: data.firstName,
      middle_name: data.middleName || null,
      last_name: data.lastName,
    });
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormField
        name="firstName"
        label="First Name"
        render={({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
          />
        )}
        required
      />
      <FormField
        name="middleName"
        label="Middle Name"
        render={({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
          />
        )}
      />
      <FormField
        name="lastName"
        label="Last Name"
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