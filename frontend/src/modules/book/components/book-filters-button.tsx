import { useState } from 'react';
import { FilterIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { DialogDrawer } from '@/core/ui/components/dialog-drawer';

import { GetBooksForm } from './get-books-form';


export function BookFiltersButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DialogDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button type="button" variant="secondary">
          <FilterIcon />
          <span>Filters</span>
        </Button>
      }
      title="Filter Books"
    >
      <GetBooksForm onSubmitted={() => { setOpen(false); }} />
    </DialogDrawer>
  );
}