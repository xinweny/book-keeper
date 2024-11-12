import { FilterIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { DialogDrawer } from '@/core/ui/components/dialog-drawer';

import { GetBooksForm } from './get-books-form';

export function BookFiltersButton() {
  return (
    <DialogDrawer
      trigger={
        <Button variant="secondary">
          <FilterIcon />
          <span>Filter</span>
        </Button>
      }
      title="Filter Books"
    >
      <GetBooksForm />
    </DialogDrawer>
  );
}