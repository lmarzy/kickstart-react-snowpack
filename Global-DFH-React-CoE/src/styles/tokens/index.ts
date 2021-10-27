import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';
import { spacing } from './spacing';
import { layout } from './layout';
import { heights } from './heights';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { borderRadius, transitionSpeeds } from './misc';

export const tokens = `
  :root {
    ${fontSizes}
    ${fontWeights}
    ${spacing}
    ${layout}
    ${heights}
    ${colors}
    ${breakpoints}
    ${borderRadius}
    ${transitionSpeeds}
  }
`;
