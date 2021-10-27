import React, { FC } from 'react';

import { SpacingType } from '../../../shared/types-styles';

import { StyledBox } from './box.styled';

type HtmlTag = 'div' | 'section' | 'article' | 'aside' | 'span';
export type BgCol = 'blue-light' | 'grey-light' | 'white';
export type Width = '25%' | '50%' | '75%';

interface BoxProps {
  as?: HtmlTag;
  w?: Width;
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
  bgCol?: BgCol;
  border?: boolean;
  boxShadow?: boolean;
}

export const Box: FC<BoxProps> = ({
  as = 'div',
  w,
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
  bgCol,
  border = false,
  boxShadow = false,
  children,
}) => (
  <StyledBox
    as={as}
    $w={w}
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
    $bgCol={bgCol}
    $border={border}
    $boxShadow={boxShadow}
  >
    {children}
  </StyledBox>
);
