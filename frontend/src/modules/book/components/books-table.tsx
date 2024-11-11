import { ColumnDef } from '@tanstack/react-table';
import ISBN from 'isbn3';

import { GetBooksResponse } from '../types/get-books-response';

import { formatFullName } from '@/modules/author/utils/format-full-name';

import { useGetBooksQuery } from '../hooks/use-get-books-query';

import { DataTable } from '@/core/components/data-table';


export function BooksTable() {
  const query = useGetBooksQuery<GetBooksResponse[]>();

  return (
    <DataTable
      data={query.data || []}
      columns={columns}
    />
  )
}

const columns: ColumnDef<GetBooksResponse>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    header: 'Author',
    cell: ({ row: { original: { author } } }) => formatFullName(author.first_name, author.middle_name, author.last_name),
  },
  {
    accessorKey: 'genre.name',
    header: 'Genre',
  },
  {
    accessorKey: 'isbn',
    header: 'ISBN13',
    cell: ({ row: { original: { isbn } } }) => {
      const res = ISBN.parse(isbn);

      return res && res.isIsbn13
        ? res.isbn13h
        : '';
    },
  },
  {
    accessorKey: 'publication_date',
    header: 'Publication Date',
  },
];