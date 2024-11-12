import {
  useQueryStates,
  createSerializer,
  parseAsString,
  parseAsInteger,
  parseAsIsoDateTime,
} from 'nuqs';

const parsers = {
  title: parseAsString,
  authorId: parseAsInteger,
  genreId: parseAsInteger,
  isbn: parseAsString,
  publicationDateFrom: parseAsIsoDateTime,
  publicationDateTo: parseAsIsoDateTime,
};

export const useGetBooksUrlParams = () => {
  return useQueryStates(parsers);
};

export const serializeGetBooksUrlParams = createSerializer(parsers, {
  urlKeys: {
    authorId: 'author_id',
    genreId: 'genre_id',
    publicationDateFrom: 'publication_date_from',
    publicationDateTo: 'publication_date_to',
  },
});