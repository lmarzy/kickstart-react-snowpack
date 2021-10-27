// ========================================================================
// TOKENS/FONT-SIZES
// ========================================================================

import { pxToRem } from '../utils';
import { fontSizesPx } from '../settings';

export const fontSizes = `
  --size-1: ${pxToRem(fontSizesPx[1])};
  --size-2: ${pxToRem(fontSizesPx[2])};
  --size-3: ${pxToRem(fontSizesPx[3])};
  --size-4: ${pxToRem(fontSizesPx[4])};
  --size-5: ${pxToRem(fontSizesPx[5])};
  --size-6: ${pxToRem(fontSizesPx[6])};
`;
