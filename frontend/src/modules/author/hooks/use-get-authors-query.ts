import { useQuery } from '@tanstack/react-query';

import { GetAuthorsResponse } from '../types/get-authors-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { useGetAuthorsUrlParams } from './use-get-authors-url-params';

export const useGetAuthorsQuery = () => {
  const [params] = useGetAuthorsUrlParams();

  const urlSearchParams = new URLSearchParams({
    name: params.authorName || '',
  });

  return useQuery({
    queryKey: ['authors'],
    queryFn: () => apiFetch<GetAuthorsResponse[]>(`authors?${urlSearchParams.toString()}`),
  });
};