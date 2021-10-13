import { pxToEm } from '.';
import { breakpoints, BreakpointValues } from '../settings';

type mediatype = 'min' | 'max';

export const mediaQuery = (type: mediatype, bp: BreakpointValues): string => {
  return `@media (${type}-width: ${pxToEm(breakpoints[bp])})`;
};
