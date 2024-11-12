'use client';

import { useForm } from 'react-hook-form';

import { GetBooksSchema, getBooksSchemaResolver } from '../schema/get-books-schema';

import { useGetBooksUrlParams } from '../hooks/use-get-books-url-params';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';
import { Input } from '@/core/form/components/input';
import { InputDateRange } from '@/core/form/components/input-date-range';

import { InputAuthorSelect } from '@/modules/author/components/input-author-select';
import { InputGenreSelect } from '@/modules/genre/components/input-genre-select';
import { ResetButton } from '@/core/form/components/reset-button';

const defaultValues = {
  title: undefined,
  isbn: undefined,
  authorId: undefined,
  genreId: undefined,
  publicationDate: {
    from: undefined,
    to: undefined,
  },
};

export function GetBooksForm() {
  const [params, setParams] = useGetBooksUrlParams();

  const form = useForm<GetBooksSchema>({
    defaultValues,
    resolver: getBooksSchemaResolver,
  });

  const onSubmit = async () => {

  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      className="flex flex-wrap gap-2 items-center"
    >
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
        label="ISBN13"
        render={({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
            maxLength={17}
          />
        )}
      />
      <FormField
        name="publicationDate"
        label="Publication Date"
        render={({ value, onChange }) => (
          <InputDateRange
            value={value}
            onSelect={onChange}
            fromYear={1966}
          />
        )}
      />
      <div>
        <ResetButton
          defaultValues={defaultValues}
        />
      </div>
    </Form>
  );
}