import { useState, useEffect } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../../tailwind.config';

// Get breakpoints from tailwind config
const breakpoints = resolveConfig(tailwindConfig).theme.screens;

type Breakpoint = keyof typeof breakpoints;

export function useMediaQuery(breakpoint: Breakpoint) {
  const [bool, setBool] = useState<boolean>(false);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      // Check if media query condition is still met when window size changes
      setBool(event.matches);
    };

    // Check if document matches the specified media query and attach change event listener
    const result = matchMedia(`(min-width: ${breakpoints[breakpoint]})`);

    result.addEventListener('change', onChange);
    setBool(result.matches);

    // Cleanup event listener on unmount
    return () => result.removeEventListener('change', onChange);
  }, [breakpoint])

  return bool;
};