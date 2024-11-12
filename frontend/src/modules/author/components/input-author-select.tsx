import { formatFullName } from '../utils/format-full-name';

import { useGetAuthorsQuery } from '../hooks/use-get-authors-query';
import { useGetAuthorsUrlParams } from '../hooks/use-get-authors-url-params';

import { InputSelectCommand } from '@/core/form/components/input-select-command';

interface InputAuthorSelectProps {
  value: number;
  onSelect: (value: number) => void;
}

export function InputAuthorSelect({
  value,
  onSelect,
}: InputAuthorSelectProps) {
  const [{ authorName }, setQuery] = useGetAuthorsUrlParams();

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
      query={authorName}
      setQuery={value => { setQuery({ authorName: value }); }}
      placeholder="Search Authors"
      isLoading={isLoading}
    />
  );
}