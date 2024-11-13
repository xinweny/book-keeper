import { format } from 'date-fns';

import { formatFullName } from '@/modules/author/utils/format-full-name';

import { useGetBooksUrlParams, GetBooksUrlParams } from '../hooks/use-get-books-url-params';

import { useGetAuthorQuery } from '@/modules/author/hooks/use-get-author-query';
import { useGetGenreQuery } from '@/modules/genre/hooks/use-get-genre-query';

import { FilterBadge } from '@/core/ui/components/filter-badge';

export function BookFilters() {
  const [{
    title,
    authorId,
    genreId,
    isbn,
    publicationDateTo,
    publicationDateFrom,
  }, setParams] = useGetBooksUrlParams();

  const { data: author } = useGetAuthorQuery(authorId!, { enabled: !!authorId });
  const { data: genre } = useGetGenreQuery(genreId!, { enabled: !!genreId });

  const filters = [
    {
      show: !!title,
      label: 'Title',
      value: title || '',
      reset: { title: null },
    },
    {
      show: !!authorId,
      label: 'Author',
      value: author
        ? formatFullName(author.first_name, author.middle_name, author.last_name)
        : '',
        reset: { authorId: null },
    },
    {
      show: !!genreId,
      label: 'Genre',
      value: genre ? genre.name : '',
      reset: { genreId: null },
    },
    {
      show: !!isbn,
      label: 'ISBN',
      value: isbn || '',
      reset: { isbn: null },
    },
    {
      show: !!publicationDateFrom || !!publicationDateTo,
      label: 'Publication Date',
      value: `${publicationDateFrom ? format(publicationDateFrom, 'dd/LL/yyyy') : ''} - ${publicationDateTo ? format(publicationDateTo, 'dd/LL/yyyy') : ''}`,
      reset: {
        publicationDateFrom: null,
        publicationDateTo: null,
      },
    },
  ] satisfies {
    show: boolean;
    label: string;
    value: string;
    reset: Partial<GetBooksUrlParams>;
  }[]

  return (
    <div className="hidden md:flex items-center flex-wrap gap-1">
      {filters.map(({ show, label, value, reset }) => (show &&
        <FilterBadge
          key={label}
          label={label}
          value={value}
          onClick={() => {
            setParams(reset);
          }}
        />
      ))}
    </div>
  );
}