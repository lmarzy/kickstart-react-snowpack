// ========================================================================
// TOKENS/BREAKPOINTS
// ========================================================================

import { pxToEm } from '../utils';

const generateMediaQuery = (width: number): string => {
  return `(min-width: ${pxToEm(width)})`;
};

export const breakpoints = `
  --bp-10: ${generateMediaQuery(600)};
  --bp-20: ${generateMediaQuery(1000)};
`;
