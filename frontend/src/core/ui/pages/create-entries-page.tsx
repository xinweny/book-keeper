'use client';

import { TabPanels } from '../components/tab-panels';

import { CreateBookForm } from '@/modules/book/components/create-book-form';

export function CreateEntriesPage() {
  return (
    <div className="flex items-center justify-center">
      <TabPanels
        className="w-full"
        defaultValue="book"
        panels={[
          {
            value: 'book',
            label: 'Book',
            title: 'Create Book',
            content: <CreateBookForm />
          },
          {
            value: 'author',
            label: 'Author',
            title: 'Create Author',
            content: <></>
          },
          {
            value: 'genre',
            label: 'Genre',
            title: 'Create Genre',
            content: <></>
          },
        ]}
      />
    </div>
  );
}