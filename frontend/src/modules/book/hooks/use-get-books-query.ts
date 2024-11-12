import { useQuery } from '@tanstack/react-query';

import { GetBooksResponse } from '../types/get-books-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { useGetBooksUrlParams, serializeGetBooksUrlParams } from './use-get-books-url-params';

export const useGetBooksQuery = () => {
  const [params] = useGetBooksUrlParams();

  return useQuery({
    queryKey: ['books'],
    queryFn: () => apiFetch<GetBooksResponse[]>(`books${serializeGetBooksUrlParams(params)}`),
  });
};