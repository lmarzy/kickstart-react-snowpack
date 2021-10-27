import React, { FC } from 'react';

import { FeedbackType, HeightType } from '../../../shared/types-styles';

import { StyledSpan } from './tag.styled';

interface TagProps {
  type: FeedbackType;
  height?: HeightType;
}

export const Tag: FC<TagProps> = ({ type, height = 'small', children }) => (
  <StyledSpan $type={type} $height={height}>
    {children}
  </StyledSpan>
);
