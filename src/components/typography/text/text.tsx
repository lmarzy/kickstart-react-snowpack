import React, { FC } from 'react';

import { FontSizeType, ColorType, SpacingType } from '~/shared/unions/styles';

import { StyledText } from './text.styled';

interface TextProps {
  tag?: 'p' | 'span';
  size?: FontSizeType;
  color?: ColorType;
  mb?: SpacingType;
  mt?: SpacingType;
}

export const Text: FC<TextProps> = ({ tag, size, color, mb, mt, children }) => {
  return (
    <StyledText as={tag} $size={size} $color={color} $mb={mb} $mt={mt}>
      {children}
    </StyledText>
  );
};
