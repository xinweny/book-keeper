import { useQuery } from '@tanstack/react-query';

import { GetGenresResponse } from '../types/get-genres-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { useGetGenresUrlParams } from './use-get-genres-url-params';

export const useGetGenresQuery = () => {
  const [params] = useGetGenresUrlParams();

  const urlSearchParams = new URLSearchParams({
    name: params.genreName || '',
  });

  return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiFetch<GetGenresResponse[]>(`genres?${urlSearchParams.toString()}`),
  });
};