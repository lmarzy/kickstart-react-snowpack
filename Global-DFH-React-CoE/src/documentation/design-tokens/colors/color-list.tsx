import React, { FC } from 'react';

import { Heading } from '../../..';
import { ColorAllType } from '../../../shared/types-styles';

import { Color } from './color';
import { StyledColorList } from './colors.styles';

interface ColorListProps {
  heading: string;
  colors: ColorAllType[];
}

export const ColorList: FC<ColorListProps> = ({ heading, colors }) => (
  <>
    <Heading headingLevel="h2" size={4} mb={4}>
      {heading}
    </Heading>

    <StyledColorList>
      {colors.map((color: ColorAllType) => (
        <Color key={color} color={color} />
      ))}
    </StyledColorList>
  </>
);
