import {
  useQueryStates,
  createSerializer,
  parseAsString,
} from 'nuqs';

const parsers = {
  name: parseAsString,
};

export const useGetAuthorsUrlParams = () => {
  return useQueryStates(parsers);
};

export const serializeGetAuthorsUrlParams = createSerializer(parsers);