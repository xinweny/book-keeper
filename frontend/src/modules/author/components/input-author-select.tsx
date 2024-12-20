import { formatFullName } from '../utils/format-full-name';

import { useGetAuthorsQuery } from '../hooks/use-get-authors-query';

import { InputSelectCommand } from '@/core/form/components/input-select-command';

interface InputAuthorSelectProps {
  value: number;
  onSelect: (value: number) => void;
}

export function InputAuthorSelect({
  value,
  onSelect,
}: InputAuthorSelectProps) {
  const { data, isLoading } = useGetAuthorsQuery();

  const options = (data || []).map(({ id, first_name, middle_name, last_name }) => ({
    key: id.toString(),
    label: formatFullName(first_name, middle_name, last_name),
    value: id,
  }));

  return (
    <InputSelectCommand
      options={options}
      value={value}
      onSelect={onSelect}
      label="Select Author"
      placeholder="Search Authors"
      isLoading={isLoading}
    />
  );
}