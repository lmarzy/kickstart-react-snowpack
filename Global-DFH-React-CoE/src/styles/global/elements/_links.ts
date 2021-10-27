// ========================================================================
// GLOBAL/ELEMENTS/LINKS
// ========================================================================

import { css } from 'styled-components';

// Set default colour
// Remove the gray background on active links in IE 10.
// Set text decoration

export const links = css`
  a {
    color: var(--col-blue-medium);
    background-color: transparent;
    text-decoration: none;
    transition: $transition;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
