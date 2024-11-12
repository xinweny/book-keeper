import { useState } from 'react';
import { FilterIcon } from 'lucide-react';

import { useGetBooksUrlParams } from '../hooks/use-get-books-url-params';

import { Button } from '@/components/ui/button';

import { DialogDrawer } from '@/core/ui/components/dialog-drawer';

import { GetBooksForm } from './get-books-form';

export function BookFiltersButton() {
  const [params] = useGetBooksUrlParams();
  const [open, setOpen] = useState<boolean>(false);

  const hasNoFilters = Object.entries(params).reduce((prev, [, v]) => prev && v == null, true);

  return (
    <DialogDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          type="button"
          variant={hasNoFilters
            ? 'secondary'
            : 'default'
          }
        >
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