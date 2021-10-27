import React, { FC } from 'react';

import { FontSizeType, FontWeightType, SpacingType } from '../../../shared/types-styles';

import { StyledHeading } from './heading.styled';

interface HeadingProps {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: FontSizeType;
  weight?: FontWeightType;
  mb?: SpacingType;
  mt?: SpacingType;
  bb?: boolean;
}

export const Heading: FC<HeadingProps> = ({
  headingLevel,
  size,
  weight,
  mb,
  mt,
  bb,
  children,
}) => {
  return (
    <StyledHeading
      as={headingLevel}
      $size={size}
      $weight={weight}
      $mb={mb}
      $mt={mt}
      $bb={bb}
    >
      {children}
    </StyledHeading>
  );
};
