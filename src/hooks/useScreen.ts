import { useEffect, useState } from 'react';
import tailwindConfig from '~/tailwind.config';

const config = tailwindConfig.theme.screens;
const entries = Object.entries<string>(config) as [Breakpoint, string][];
const mapped = entries.map<[Breakpoint, number]>(([b, s]) => [
  b,
  +s.replace(/px/g, ''),
]);
const sorted = mapped.sort(([, a], [, b]) => a - b);
const screen = sorted.reduce((p, [b, w]) => {
  p[b] = w;
  return p;
}, {} as { [property in Breakpoint]: number });

const defaultState: BreakpointState = {
  width: 0,
  height: 0,
  currentBreakpoint: 'xs',
  breakpoints: {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
    '3xl': false,
  },
  config,
};

export const useScreen = () => {
  const [state, setState] = useState(defaultState);
  useEffect(() => {
    if (typeof window !== 'object') {
      return;
    }
    const handleResize = () => {
      const state: BreakpointState = JSON.parse(JSON.stringify(defaultState));
      const { innerWidth, innerHeight } = window;
      state.width = innerWidth;
      state.height = innerHeight;
      Object.entries(screen).map(([bp, threshold]) => {
        if (innerWidth >= threshold) {
          state.breakpoints[bp as Breakpoint] = true;
          state.currentBreakpoint = bp as Breakpoint;
        }
      });
      setState(state);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return state;
};
