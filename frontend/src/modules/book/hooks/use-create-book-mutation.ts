import { useMutation, useQueryClient, UseMutationOptions } from '@tanstack/react-query';

import { CreateBookRequest } from '../types/create-book-request';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useCreateBookMutation = (options?: UseMutationOptions<unknown, Error, CreateBookRequest, unknown>) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: (body: CreateBookRequest) => apiFetch('books/', {
      method: 'POST',
      body,
    }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['books'] });

      if (options?.onSuccess) options?.onSuccess(data, variables, context);
    },
  });
};