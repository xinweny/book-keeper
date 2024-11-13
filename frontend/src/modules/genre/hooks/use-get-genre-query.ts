import { useQuery } from '@tanstack/react-query';

import { GetGenreResponse } from '../types/get-genre-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useGetGenreQuery = (
  genreId: number,
  options?: {
    enabled?: boolean,
  }
) => {
  return useQuery({
    queryKey: [`genre:${genreId}`],
    queryFn: () => apiFetch<GetGenreResponse>(`genres/${genreId}`),
    ...options,
  });
};