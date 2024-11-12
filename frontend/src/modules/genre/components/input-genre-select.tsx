import { useGetGenresQuery } from '../hooks/use-get-genres-query';
import { useGetGenresUrlParams } from '../hooks/use-get-genres-url-params';

import { InputSelectCommand } from '@/core/form/components/input-select-command';

interface InputAuthorSelectProps {
  value: number;
  onSelect: (value: number) => void;
}

export function InputGenreSelect({
  value,
  onSelect,
}: InputAuthorSelectProps) {
  const [{ genreName }, setQuery] = useGetGenresUrlParams();

  const { data, isLoading } = useGetGenresQuery();

  const options = (data || []).map(({ id, name }) => ({
    key: id.toString(),
    label: name,
    value: id,
  }));

  return (
    <InputSelectCommand
      options={options}
      value={value}
      onSelect={onSelect}
      label="Select Genre"
      query={genreName}
      setQuery={value => { setQuery({ genreName: value }); }}
      placeholder="Search Genres"
      isLoading={isLoading}
    />
  );
}