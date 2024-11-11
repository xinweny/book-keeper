import { useQuery } from '@tanstack/react-query';

import { apiFetch } from '@/core/api/utils/api-fetch';
import { useGetBooksUrlParams, serializeGetBooksUrlParams } from './use-get-books-url-params';

export const useGetBooksQuery = <T>() => {
  const [params] = useGetBooksUrlParams();

  return useQuery({
    queryKey: ['books'],
    queryFn: () => apiFetch<T>(`books${serializeGetBooksUrlParams(params)}`),
  });
};