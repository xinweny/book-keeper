'use client';

import { useState, ReactElement, JSXElementConstructor } from 'react';
import {
  useForm,
  Controller,
  FieldValues,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  Path,
} from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface BookFiltersFormProps<T extends FieldValues> {
  onSubmit: (data: T) => void;
  filters: {
    label: string;
    name: Path<T>;
    render: (field: {
      field: ControllerRenderProps<T, Path<T>>;
      fieldState: ControllerFieldState;
      formState: UseFormStateReturn<T>;
    }) => ReactElement<any, string | JSXElementConstructor<any>>;
  }[];
  reset?: T,
}

export function BookFiltersForm<T extends FieldValues>({
  onSubmit,
  filters,
  reset,
}: BookFiltersFormProps<T>) {

  return (
    <form
      onSubmit={formhandleSubmit(onSubmit)}
      className="flex flex-wrap gap-2 items-center"
    >
      {filters.map(({
        label,
        name,
        render,
      }) => (
        <div className="grid max-w-xs items-center gap-1.5">
          <Label
            htmlFor={name}
            className="font-semibold text-sm"
          >
            {label}
          </Label>
          <Controller
            name={name}
            control={control}
            render={render}
          />
        </div>
      ))}
      <div className="self-end flex items-end gap-2">
        <Button
          variant="link"
          onClick={() => {
            form.reset(reset);
          }}
        >
          Reset
        </Button>
        <Button
          type="submit"
        >
          Search
        </Button>
      </div>
    </form>
  );
}