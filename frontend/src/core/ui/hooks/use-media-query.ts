import { useState, useEffect } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../../tailwind.config';

const breakpoints = resolveConfig(tailwindConfig).theme.screens;

type Breakpoint = keyof typeof breakpoints;

export function useMediaQuery(breakpoint: Breakpoint) {
  const [bool, setBool] = useState<boolean>(false);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setBool(event.matches);
    };

    const result = matchMedia(`(min-width: ${breakpoints[breakpoint]})`);

    result.addEventListener('change', onChange);
    setBool(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [breakpoint])

  return bool;
};