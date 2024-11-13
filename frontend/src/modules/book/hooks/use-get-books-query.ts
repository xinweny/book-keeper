import { useQuery } from '@tanstack/react-query';

import { GetBooksResponse } from '../types/get-books-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { serializeGetBooksUrlParams, useGetBooksUrlParams } from './use-get-books-url-params';

export const useGetBooksQuery = () => {
  const [params] = useGetBooksUrlParams();

  const url = serializeGetBooksUrlParams('books', params);

  return useQuery({
    queryKey: ['books', url],
    queryFn: () => apiFetch<GetBooksResponse[]>(url),
  });
};