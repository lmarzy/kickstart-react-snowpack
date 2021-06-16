import React, { FC } from 'react';

import { FontSizeType } from '../../../shared/types-styles';

import { StyledHeading } from './heading.styled';

interface HeadingProps {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: FontSizeType;
}

export const Heading: FC<HeadingProps> = ({ headingLevel, size, children }) => {
  return (
    <StyledHeading as={headingLevel} $size={size}>
      {children}
    </StyledHeading>
  );
};
