import React, { FC } from 'react';

import { FontSizeType, ColorType } from '../../../shared/types-styles';

import { StyledText } from './text.styled';

interface TextProps {
  tag?: 'p' | 'span';
  size?: FontSizeType;
  color?: ColorType;
}

export const Text: FC<TextProps> = ({ tag, size, color, children }) => {
  return (
    <StyledText as={tag} $size={size} $color={color}>
      {children}
    </StyledText>
  );
};
