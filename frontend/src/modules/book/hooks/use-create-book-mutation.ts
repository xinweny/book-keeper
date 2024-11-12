import { useMutation } from '@tanstack/react-query';

import { CreateBookRequest } from '../types/create-book-request';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useCreateBookMutation = () => {
  return useMutation({
    mutationKey: ['books'],
    mutationFn: (body: CreateBookRequest) => apiFetch('books/', {
      method: 'POST',
      body,
    }),
  });
};