interface ApiRequestInit extends RequestInit {
  body: any;
}

export const apiFetch = async <T>(path: string, req?: ApiRequestInit) => {
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

  return res.json() as T | undefined;
};