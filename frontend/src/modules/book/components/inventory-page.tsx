'use client';

import { useGetBooksQuery } from '../hooks/use-get-books-query';

import { PaginationInfo } from '@/modules/book/components/pagination-info';

import { BooksTable } from './books-table';
import { ExportRowsDropdownMenu } from './export-rows-dropdown-menu';
import { BookFiltersButton } from './book-filters-button';

export function InventoryPage() {
  const { data } = useGetBooksQuery();

  const books = data || [];

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-2 mb-2">
        <BookFiltersButton />
        <div className="flex items-center gap-2">
          <PaginationInfo totalCount={books.length} />
          <ExportRowsDropdownMenu books={books} />
        </div>
      </div>
      <BooksTable books={books} />
    </div>
  );
}