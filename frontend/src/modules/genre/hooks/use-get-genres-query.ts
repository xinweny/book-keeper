import { useQuery } from '@tanstack/react-query';

import { GetGenresResponse } from '../types/get-genres-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { useGetGenresUrlParams, serializeGetGenresUrlParams } from './use-get-genres-url-params';

export const useGetGenresQuery = () => {
  const [params] = useGetGenresUrlParams();

  return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiFetch<GetGenresResponse[]>(serializeGetGenresUrlParams('genres', params)),
  });
};