import {
  PrinterIcon,
  FileJsonIcon,
  FileSpreadsheetIcon,
} from 'lucide-react';

import { GetBooksResponse } from '../types/get-books-response';

import { downloadFile } from '@/lib/download-file';
import { convertToCsv } from '@/lib/convert-to-csv';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
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
          <span className="hidden sm:block">Export Table</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuOptions.map(({ icon, label, onClick }) => {
          const Icon = icon;

          return (
            <DropdownMenuItem
              key={label}
              onClick={() => {
                onClick(books);
              }}
              className="flex items-center gap-2"
            >
              <Icon />
              <span>{label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const dropdownMenuOptions = [
  {
    icon: FileSpreadsheetIcon,
    label: 'Export to CSV',
    onClick: (books: GetBooksResponse[]) => {
      const csvData = [
        ['id', 'title', 'author', 'genre', 'isbn13', 'publication_date'],
        ...(books.map(book => [
          book.id.toString(),
          book.title,
          `${book.author.first_name} ${book.author.middle_name ? `${book.author.middle_name} ` : ''}${book.author.last_name}`,
          book.genre.name,
          book.isbn,
          book.publication_date,
        ])),
      ];

      const csvString = convertToCsv(csvData);

      downloadFile({
        data: csvString,
        type: 'text/csv',
        fileName: 'inventory.csv',
      });
    },
  },
  {
    icon: FileJsonIcon,
    label: 'Export to JSON',
    onClick: (books: GetBooksResponse[]) => {
      downloadFile({
        data: JSON.stringify({ data: books }),
        type: 'application/json',
        fileName: 'inventory.json',
      });
    },
  },
];