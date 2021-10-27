import React, { FC } from 'react';

import {
  FontSizeType,
  ColorMainType,
  SpacingType,
  FontWeightType,
} from '../../../shared/types-styles';

import { StyledText } from './text.styled';

interface TextProps {
  tag?: 'p' | 'span';
  size?: FontSizeType;
  color?: ColorMainType;
  fontWeight?: FontWeightType;
  mb?: SpacingType;
  mt?: SpacingType;
}

export const Text: FC<TextProps> = ({
  tag,
  size,
  fontWeight,
  color,
  mb,
  mt,
  children,
}) => {
  return (
    <StyledText
      as={tag}
      $size={size}
      $fontWeight={fontWeight}
      $color={color}
      $mb={mb}
      $mt={mt}
    >
      {children}
    </StyledText>
  );
};
