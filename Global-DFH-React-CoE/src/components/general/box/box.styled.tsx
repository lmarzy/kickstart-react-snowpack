import styled, { css } from 'styled-components';

import { SpacingType } from '../../../shared/types-styles';

import { BgCol, Width } from './box';

interface StyledBoxProps {
  $w?: Width;
  $m?: SpacingType;
  $mb?: SpacingType;
  $mt?: SpacingType;
  $ml?: SpacingType;
  $mr?: SpacingType;
  $p?: SpacingType;
  $pt?: SpacingType;
  $pb?: SpacingType;
  $pl?: SpacingType;
  $pr?: SpacingType;
  $bgCol?: BgCol;
  $border?: boolean;
  $boxShadow?: boolean;
}

export const StyledBox = styled.div<StyledBoxProps>`
  ${({ $w }) =>
    $w &&
    css`
      width: ${$w};
    `}

  ${({ $m }) =>
    $m &&
    css`
      margin: var(--spacing-${$m});
    `}

  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: var(--spacing-${$mb});
    `}

  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: var(--spacing-${$mt});
    `}

  ${({ $ml }) =>
    $ml &&
    css`
      margin-left: var(--spacing-${$ml});
    `}
  
  ${({ $mr }) =>
    $mr &&
    css`
      margin-right: var(--spacing-${$mr});
    `}

  ${({ $p }) =>
    $p &&
    css`
      padding: var(--spacing-${$p});
    `}

  ${({ $pb }) =>
    $pb &&
    css`
      padding-bottom: var(--spacing-${$pb});
    `}

  ${({ $pt }) =>
    $pt &&
    css`
      padding-bottom: var(--spacing-${$pt});
    `}

  ${({ $pl }) =>
    $pl &&
    css`
      padding-bottom: var(--spacing-${$pl});
    `}
  
  ${({ $pr }) =>
    $pr &&
    css`
      padding-bottom: var(--spacing-${$pr});
    `}

  ${({ $bgCol }) =>
    $bgCol &&
    css`
      background-color: var(--col-${$bgCol});
    `}

  ${({ $border }) =>
    $border &&
    css`
      border: 1px solid var(--col-border);
      border-radius: var(--border-radius);
    `}
  
  ${({ $boxShadow }) =>
    $boxShadow &&
    css`
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    `}
`;
