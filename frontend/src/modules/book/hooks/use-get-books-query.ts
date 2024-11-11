import { useQuery } from '@tanstack/react-query';

import { apiFetch } from '@/core/utils/api-fetch';
import { useBooksUrlParams, serializeBooksUrlParams } from './use-books-url-params';

export const useGetBooksQuery = () => {
  const [params] = useBooksUrlParams();

  return useQuery({
    queryKey: ['books'],
    queryFn: () => apiFetch(`books${serializeBooksUrlParams(params)}`),
  });
};