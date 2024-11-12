import { useQuery } from '@tanstack/react-query';

import { GetAuthorsResponse } from '../types/get-authors-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { useGetAuthorsUrlParams, serializeGetAuthorsUrlParams } from './use-get-authors-url-params';

export const useGetAuthorsQuery = () => {
  const [params] = useGetAuthorsUrlParams();

  return useQuery({
    queryKey: ['authors'],
    queryFn: () => apiFetch<GetAuthorsResponse[]>(`authors${serializeGetAuthorsUrlParams(params)}`),
  });
};