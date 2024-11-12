import { ColumnDef } from '@tanstack/react-table';
import ISBN from 'isbn3';

import { GetBooksResponse } from '../types/get-books-response';

import { formatFullName } from '@/modules/author/utils/format-full-name';

import { DataTable } from '@/core/ui/components/data-table';

interface BooksTableProps {
  books: GetBooksResponse[];
}

export function BooksTable({
  books,
}: BooksTableProps) {
  return (
    <DataTable
      data={books}
      columns={columns}
    />
  );
}

const columns: ColumnDef<GetBooksResponse>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row: { original: { title } } }) => (
      <span className="font-semibold">{title}</span>
    ),
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