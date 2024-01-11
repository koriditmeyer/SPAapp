// useTailwindBreakpoints.js
import config from '../../tailwind.config.js';

const useTailwindBreakpoints = () => {
  const breakpoints = config.theme.extend.screens;
  const parsedBreakpoints = {};

  for (const [key, value] of Object.entries(breakpoints)) {
    // Remove 'px' and convert to integer
    parsedBreakpoints[key] = parseInt(value, 10);
  }

  return parsedBreakpoints;
};

export default useTailwindBreakpoints;
