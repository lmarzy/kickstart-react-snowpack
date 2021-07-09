import React, { FC } from 'react';

import { ColorType, FontSizeType, SpacingType } from '~/shared/unions/styles';

import { StyledHeading } from './heading.styled';

interface HeadingProps {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: FontSizeType;
  color?: ColorType;
  mb?: SpacingType;
  mt?: SpacingType;
}

export const Heading: FC<HeadingProps> = ({
  headingLevel,
  size,
  color,
  mb,
  mt,
  children,
}) => {
  return (
    <StyledHeading
      as={headingLevel}
      $size={size}
      $color={color}
      $mb={mb}
      $mt={mt}
    >
      {children}
    </StyledHeading>
  );
};
