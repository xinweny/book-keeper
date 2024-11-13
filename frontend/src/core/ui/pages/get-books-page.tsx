'use client';

import { useGetBooksQuery } from '@/modules/book/hooks/use-get-books-query';


import { PaginationInfo } from '@/core/ui/components/pagination-info';

import { BooksTable } from '@/modules/book/components/books-table';
import { ExportRowsDropdownMenu } from '@/modules/book/components/export-rows-dropdown-menu';
import { BookFiltersButton } from '@/modules/book/components/book-filters-button';

export function GetBooksPage() {
  const { data, isLoading } = useGetBooksQuery();

  const books = data || [];

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-2 py-2 pt-0">
        <BookFiltersButton />
        <div className="flex items-center gap-2">
          <PaginationInfo totalCount={books.length} />
          <ExportRowsDropdownMenu books={books} />
        </div>
      </div>
      <BooksTable books={books} isLoading={isLoading} />
    </div>
  );
}