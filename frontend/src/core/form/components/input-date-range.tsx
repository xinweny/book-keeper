import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/cn';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

interface InputDateRangeProps {
  value: DateRange;
  onSelect: (value?: DateRange) => void;
  fromYear: number;
  toYear?: number;
  placeholder?: string;
}

export function InputDateRange({
  value,
  onSelect,
  fromYear,
  toYear = new Date().getFullYear(),
  placeholder = 'Select dates',
}: InputDateRangeProps) {
  const hasNoDatesSelected = !value.from && !value.to;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-auto justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>
            {hasNoDatesSelected
              ? placeholder
              : `${value.from ? format(value.from, 'dd/LL/yyyy') : ''} - ${value.to ? format(value.to, 'dd/LL/yyyy') : ''}`
            }
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          captionLayout="dropdown-buttons"
          selected={value}
          defaultMonth={value.from}
          onSelect={onSelect}
          numberOfMonths={1}
          fromYear={fromYear}
          toYear={toYear}
        />
      </PopoverContent>
    </Popover>
  );
}