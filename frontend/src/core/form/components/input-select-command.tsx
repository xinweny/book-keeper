'use client';

import { useState, useEffect } from 'react';
import { FieldValues, Path, PathValue } from 'react-hook-form';

import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/cn';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface InputSelectCommandProps<T> {
  options: {
    key: string;
    value: PathValue<T, Path<T>>;
    label: string;
  }[];
  value: PathValue<T, Path<T>>;
  onSelect: (value: PathValue<T, Path<T>> | undefined) => void;
  placeholder?: string;
  label: string;
  isLoading?: boolean;
  emptyPlaceholder?: React.ReactNode;
  query: string;
  setQuery: (value: string) => void;
}

export function InputSelectCommand<T extends FieldValues>({
  options,
  onSelect,
  value,
  label,
  placeholder = 'Search',
  isLoading = false,
  emptyPlaceholder = 'No results found.',
  query,
  setQuery,
}: InputSelectCommandProps<T>) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setQuery('');
  }, [value]);

  console.log(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="text-left w-full justify-between"
        >
          <span className="w-auto overflow-hidden flex-auto text-ellipsis">
            {value
              ? options.find(({ value: v }) => value === v)?.label || ''
              : label
            }
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            value={query}
            onInput={e => {
              setQuery(e.currentTarget.value);
            }}
            placeholder={placeholder}
          />
          <CommandList>
            <CommandEmpty>
              {isLoading
                ? 'Loading...'
                : emptyPlaceholder
              }
            </CommandEmpty>
            <CommandGroup>
              {options.map(({ value: v, label, key }) => (
                <CommandItem
                  key={key}
                  value={key}
                  onSelect={() => {
                    onSelect(value === v
                      ? undefined
                      : v
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === v ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
