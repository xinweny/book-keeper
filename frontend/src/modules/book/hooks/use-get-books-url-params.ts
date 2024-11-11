import {
  useQueryStates,
  createSerializer,
  parseAsString,
  parseAsInteger,
  parseAsIsoDateTime,
} from 'nuqs';

const parsers = {
  author: parseAsString,
  genre_id: parseAsInteger,
  isbn: parseAsString,
  publication_date_from: parseAsIsoDateTime,
  publication_date_to: parseAsIsoDateTime,
};

export const useGetBooksUrlParams = () => {
  return useQueryStates(parsers);
};

export const serializeGetBooksUrlParams = createSerializer(parsers);