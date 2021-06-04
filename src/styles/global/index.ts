import { createGlobalStyle } from 'styled-components';

import { theme } from '../theme/theme';

import { boxSizing, normalise, reset } from './base';
import { images, links, page, tables } from './elements';

export default createGlobalStyle`
  ${theme}
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;
