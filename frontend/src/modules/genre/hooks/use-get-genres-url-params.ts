import {
  useQueryStates,
  createSerializer,
  parseAsString,
} from 'nuqs';

const parsers = {
  genreName: parseAsString.withDefault(''),
};

export const useGetGenresUrlParams = () => {
  return useQueryStates(parsers);
};

export const serializeGetGenresUrlParams = createSerializer(parsers, {
  urlKeys: {
    genreName: 'name',
  },
});