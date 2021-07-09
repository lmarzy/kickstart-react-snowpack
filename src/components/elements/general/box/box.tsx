import React, { FC } from 'react';

import { SpacingType } from '~/shared/unions/styles';

import { StyledBox } from './box.styled';

export type Tag = 'div' | 'section' | 'article' | 'aside' | 'span';

interface BoxProps {
  as?: Tag;
  m?: SpacingType;
  mb?: SpacingType;
  mt?: SpacingType;
  ml?: SpacingType;
  mr?: SpacingType;
  p?: SpacingType;
  pt?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  pr?: SpacingType;
}

export const Box: FC<BoxProps> = ({
  as,
  m,
  mb,
  mt,
  ml,
  mr,
  p,
  pb,
  pt,
  pl,
  pr,
  children,
}) => (
  <StyledBox
    as={as}
    $m={m}
    $mb={mb}
    $mt={mt}
    $ml={ml}
    $mr={mr}
    $p={p}
    $pb={pb}
    $pt={pt}
    $pl={pl}
    $pr={pr}
  >
    {children}
  </StyledBox>
);
