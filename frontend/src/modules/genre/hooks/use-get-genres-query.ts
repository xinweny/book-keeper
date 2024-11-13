import { useQuery } from '@tanstack/react-query';

import { GetGenresResponse } from '../types/get-genres-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

import { useGetGenresUrlParams, serializeGetGenresUrlParams } from './use-get-genres-url-params';

export const useGetGenresQuery = () => {
  const [params] = useGetGenresUrlParams();

  const url = serializeGetGenresUrlParams('genres', params);

  return useQuery({
    queryKey: ['genres', url],
    queryFn: () => apiFetch<GetGenresResponse[]>(url),
  });
};