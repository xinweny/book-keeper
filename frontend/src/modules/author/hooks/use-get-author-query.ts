import { useQuery } from '@tanstack/react-query';

import { GetAuthorResponse } from '../types/get-author-response';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useGetAuthorQuery = (
  authorId: number,
  options?: {
    enabled?: boolean,
  }
) => {
  return useQuery({
    queryKey: [`author:${authorId}`],
    queryFn: () => apiFetch<GetAuthorResponse>(`authors/${authorId}`),
    ...options,
  });
};