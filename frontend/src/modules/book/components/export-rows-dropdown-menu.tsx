import {
  PrinterIcon,
  FileJsonIcon,
  FileSpreadsheetIcon,
} from 'lucide-react';

import { GetBooksResponse } from '../types/get-books-response';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/core/ui/components/dropdown-menu-item';
import { Button } from '@/components/ui/button';

interface ExportRowsDropdownMenuProps {
  books: GetBooksResponse[];
}

export function ExportRowsDropdownMenu({
  books,
}: ExportRowsDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={books.length === 0}
          variant="outline"
        >
          <PrinterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuOptions.map(({ icon, label, onClick }) => (
          <DropdownMenuItem
            key={label}
            icon={icon}
            label={label}
            onClick={() => {
              onClick(books);
            }}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const dropdownMenuOptions = [
  {
    icon: FileSpreadsheetIcon,
    label: 'Export to CSV',
    onClick: (books: GetBooksResponse[]) => {

    },
  },
  {
    icon: FileJsonIcon,
    label: 'Export to JSON',
    onClick: (books: GetBooksResponse[]) => {

    },
  },
];