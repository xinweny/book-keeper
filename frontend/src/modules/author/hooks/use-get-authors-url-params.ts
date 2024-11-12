import {
  useQueryStates,
  createSerializer,
  parseAsString,
} from 'nuqs';

const parsers = {
  authorName: parseAsString.withDefault(''),
};

export const useGetAuthorsUrlParams = () => {
  return useQueryStates(parsers);
};

export const serializeGetAuthorsUrlParams = createSerializer(parsers, {
  urlKeys: {
    authorName: 'name',
  },
});