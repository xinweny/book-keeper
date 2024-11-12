import { useMutation } from '@tanstack/react-query';

import { CreateAuthorRequest } from '../types/create-author-request';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useCreateAuthorMutation = () => {
  return useMutation({
    mutationKey: ['authors'],
    mutationFn: (body: CreateAuthorRequest) => apiFetch('authors/', {
      method: 'POST',
      body,
    }),
  });
};