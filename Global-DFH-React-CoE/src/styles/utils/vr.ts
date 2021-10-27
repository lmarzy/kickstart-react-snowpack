// ========================================================================
// UTILS/VR - VERTICAL RHYTHM
// ========================================================================

import { baselineHeight, fontSizesPx } from '../settings';
import { FontSizeType } from '../../shared/types-styles';

export const vr = (size: FontSizeType): number => {
  return (
    Math.ceil(fontSizesPx[size] / baselineHeight) * (baselineHeight / fontSizesPx[size])
  );
};
