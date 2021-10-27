import React, { FC } from 'react';

import { ColorAllType } from '../../../shared/types-styles';

import { StyledColor } from './colors.styles';

interface ColorProps {
  color: ColorAllType;
}

export const Color: FC<ColorProps> = ({ color }) => (
  <StyledColor $color={color}>
    <div></div>
    <p>{`var(--col-${color})`}</p>
  </StyledColor>
);
