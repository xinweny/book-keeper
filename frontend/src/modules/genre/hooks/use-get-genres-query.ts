import { useQuery } from '@tanstack/react-query';

import { GetGenresResponse } from '../types/get-genres-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useGetGenresQuery = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiFetch<GetGenresResponse[]>(`genres`),
  });
};