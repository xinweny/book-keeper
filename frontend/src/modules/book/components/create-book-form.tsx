import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import ISBN from 'isbn3';

import { CreateBookSchema, createBookSchemaResolver } from '../schema/create-book-schema';

import { useCreateBookMutation } from '../hooks/use-create-book-mutation';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';
import { Input } from '@/core/form/components/input';
import { SubmitButton } from '@/core/form/components/submit-button';

import { InputAuthorSelect } from '@/modules/author/components/input-author-select';
import { InputGenreSelect } from '@/modules/genre/components/input-genre-select';

const defaultValues = {
  title: '',
  authorId: undefined,
  genreId: undefined,
  isbn: '',
  publicationDate: undefined,
};

export function CreateBookForm() {
  const {
    mutateAsync: createBook,
    isSuccess,
  } = useCreateBookMutation();

  const form = useForm<CreateBookSchema>({
    defaultValues,
    resolver: createBookSchemaResolver,
  });

  const onSubmit = async (data: CreateBookSchema) => {
    await createBook({
      title: data.title,
      author_id: data.authorId,
      genre_id: data.genreId,
      isbn: ISBN.asIsbn13(data.isbn),
      publication_date: format(data.publicationDate, 'yyyy-LL-dd'),
    });
    

    if (isSuccess) {
      toast.success('Book successfully created.');
      form.reset(defaultValues);
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormField
        name="title"
        label="Title"
        render={({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
          />
        )}
      />
      <FormField
        name="authorId"
        label="Author"
        render={({ value, onChange }) => (
          <InputAuthorSelect
            value={value}
            onSelect={onChange}
          />
        )}
      />
      <FormField
        name="genreId"
        label="Genre"
        render={({ value, onChange }) => (
          <InputGenreSelect
            value={value}
            onSelect={onChange}
          />
        )}
      />
      <FormField
        name="isbn"
        label="ISBN"
        render={({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
            maxLength={17}
            placeholder='978-1-4028-9462-6'
          />
        )}
      />
      <FormField
        name="publicationDate"
        label="Publication Date"
        render={({ value, onChange }) => (
          <Input
            type="date"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <SubmitButton />
    </Form>
  );
}