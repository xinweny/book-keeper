import { useMutation, useQueryClient, UseMutationOptions } from '@tanstack/react-query';

import { ServerError } from '@/core/api/types/server-error';
import { CreateAuthorRequest } from '../types/create-author-request';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useCreateAuthorMutation = (options?: UseMutationOptions<unknown, ServerError, CreateAuthorRequest, unknown>) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: (body: CreateAuthorRequest) => apiFetch('authors/', {
      method: 'POST',
      body,
    }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });

      if (options?.onSuccess) options?.onSuccess(data, variables, context);
    },
  });
};