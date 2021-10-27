import { createGlobalStyle } from 'styled-components';

import { tokens } from '../tokens';

import { boxSizing, normalise, reset } from './base';
import { images, links, page, main, tables } from './elements';

export const GlobalStyles = createGlobalStyle`
  ${tokens}
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${main}
  ${links}
  ${images}
  ${tables}
`;
