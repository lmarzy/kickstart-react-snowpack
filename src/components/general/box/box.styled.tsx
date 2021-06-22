import styled, { css } from 'styled-components';

import { SpacingType } from '~/shared/unions/styles';

interface StyledBoxProps {
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
}

export const StyledBox = styled.div<StyledBoxProps>`
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
      margin-bottom: var(--spacing-${$mt});
    `}

  ${({ $ml }) =>
    $ml &&
    css`
      margin-bottom: var(--spacing-${$ml});
    `}
  
  ${({ $mr }) =>
    $mr &&
    css`
      margin-bottom: var(--spacing-${$mr});
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
`;
