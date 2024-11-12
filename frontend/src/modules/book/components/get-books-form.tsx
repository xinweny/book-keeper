'use client';

import { useForm } from 'react-hook-form';

import { GetBooksSchema, getBooksSchemaResolver } from '../schema/get-books-schema';

import { useGetBooksUrlParams } from '../hooks/use-get-books-url-params';
import { useGetBooksQuery } from '../hooks/use-get-books-query';

import { Form } from '@/core/form/components/form';
import { FormField } from '@/core/form/components/form-field';
import { Input } from '@/core/form/components/input';
import { InputDateRange } from '@/core/form/components/input-date-range';

import { InputAuthorSelect } from '@/modules/author/components/input-author-select';
import { InputGenreSelect } from '@/modules/genre/components/input-genre-select';
import { ResetButton } from '@/core/form/components/reset-button';
import { SubmitButton } from '@/core/form/components/submit-button';

export function GetBooksForm() {
  const { refetch } = useGetBooksQuery();
  const [params, setParams] = useGetBooksUrlParams();

  const form = useForm<GetBooksSchema>({
    defaultValues: {
      title: params.title || '',
      isbn: params.isbn || '',
      authorId: params.authorId || undefined,
      genreId: params.genreId || undefined,
      publicationDate: {
        from: params.publicationDateFrom || undefined,
        to: params.publicationDateTo || undefined,
      },
    },
    resolver: getBooksSchemaResolver,
  });

  const onSubmit = async (data: GetBooksSchema) => {
    await setParams({
      title: data.title || null,
      isbn: data.isbn || null,
      authorId: data.authorId || null,
      genreId: data.genreId || null,
      publicationDateFrom: data.publicationDate.from || null,
      publicationDateTo: data.publicationDate.to || null,
    });

    await refetch();
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
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
            placeholder='978-1-4028-9462-6'
          />
        )}
      />
      <FormField
        name="publicationDate"
        label="Publication Date Range"
        render={({ value, onChange }) => (
          <InputDateRange
            value={value}
            onSelect={onChange}
            fromYear={1966}
          />
        )}
      />
      <div className="flex gap-2">
        <ResetButton
          className="flex-grow"
          defaultValues={{
            title: '',
            isbn: '',
            authorId: undefined,
            genreId: undefined,
            publicationDate: {
              from: undefined,
              to: undefined,
            },
          }}
        />
        <SubmitButton
          className="flex-grow"
        >
          Submit
        </SubmitButton>
      </div>
    </Form>
  );
}