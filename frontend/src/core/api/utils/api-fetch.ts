import { ServerError } from '../types/server-error';

interface ApiRequestInit extends RequestInit {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  body?: any; 
}

export const apiFetch = async <T>(
  path: string,
  req?: ApiRequestInit,
  errorMessage?: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${path}`,
    req
      ? {
      method: req.method,
      body: req.body ? JSON.stringify(req.body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...req?.headers,
      },
    }
      : undefined
  );

  const data = await res.json() as T | undefined;

  if (!res.ok) throw new ServerError({
    message: errorMessage,
    data: data as Record<string, string[]>,
  });

  return data;
};