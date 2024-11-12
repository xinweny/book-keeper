import { useMutation } from '@tanstack/react-query';

import { CreateGenreRequest } from '../types/create-genre-request';

import { apiFetch } from '@/core/api/utils/api-fetch';

export const useCreateGenreMutation = () => {
  return useMutation({
    mutationKey: ['genres'],
    mutationFn: (body: CreateGenreRequest) => apiFetch('genres/', {
      method: 'POST',
      body,
    }),
  });
};