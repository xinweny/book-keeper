import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';

import { ServerError } from '@/core/api/types/server-error';
import { CreateGenreRequest } from '../types/create-genre-request';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useCreateGenreMutation = (options?: UseMutationOptions<unknown, ServerError, CreateGenreRequest, unknown>) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: (body: CreateGenreRequest) => apiFetch('genres/', {
      method: 'POST',
      body,
    }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['genres'] });

      if (options?.onSuccess) options?.onSuccess(data, variables, context);
    },
  });
};