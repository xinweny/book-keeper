'use client';

import { useGetBooksQuery } from '../hooks/use-get-books-query';

export function InventoryPage() {
  const query = useGetBooksQuery();

  console.log(query);

  return (
    <div>
      Main
    </div>
  );
}