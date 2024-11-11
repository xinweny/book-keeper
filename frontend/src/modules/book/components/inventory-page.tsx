'use client';

import { GetBooksResponse } from '../types/get-books-response';

import { useGetBooksQuery } from '../hooks/use-get-books-query';

import { BooksTable } from './books-table';
import { ExportRowsDropdownMenu } from './export-rows-dropdown-menu';

export function InventoryPage() {
  const query = useGetBooksQuery<GetBooksResponse[]>();

  const books = query.data || [];

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-2 mb-2">
        <div></div>
        <ExportRowsDropdownMenu books={books} />
      </div>
      <BooksTable books={books} />
    </div>
  );
}