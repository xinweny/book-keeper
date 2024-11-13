'use client';

import { TabPanels } from '../../../core/ui/components/tab-panels';

import { CreateBookForm } from '@/modules/book/components/create-book-form';
import { CreateAuthorForm } from '@/modules/author/components/create-author-form';
import { CreateGenreForm } from '@/modules/genre/components/create-genre-form';

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
            content: <CreateBookForm />,
          },
          {
            value: 'author',
            label: 'Author',
            title: 'Create Author',
            content: <CreateAuthorForm />,
          },
          {
            value: 'genre',
            label: 'Genre',
            title: 'Create Genre',
            content: <CreateGenreForm />
          },
        ]}
      />
    </div>
  );
}