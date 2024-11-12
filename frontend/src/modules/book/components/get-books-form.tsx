'use client';

import { useForm, Path } from 'react-hook-form';

import { GetBooksSchema, getBooksSchemaResolver } from '../schema/get-books-schema';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';
import { Input } from '@/core/form/components/input';
import { InputDateRange } from '@/core/form/components/input-date-range';
import { InputSelectCommand } from '@/core/form/components/input-select-command';
import { useGetAuthorsQuery } from '@/modules/author/hooks/use-get-authors-query';

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
  const form = useForm<GetBooksSchema>({
    defaultValues,
    resolver: getBooksSchemaResolver,
  });

  const q = useGetAuthorsQuery();

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
          <InputSelectCommand
            value={value}
            onSelect={onChange}
            label="Select Author"
          />
        )}
      />
      <FormField
        name="genreId"
        label="Genre"
        render={({ value, onChange }) => (
          <InputSelectCommand
            value={value}
            onSelect={onChange}
            label="Select Genre"
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
    </Form>
  );
}