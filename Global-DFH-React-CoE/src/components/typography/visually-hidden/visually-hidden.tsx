import React, { FC } from 'react';

import { StyledText } from './visually-hidden.styled';

interface VisuallyHiddenProps {
  tag?: 'p' | 'span';
}

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({ tag = 'p', children }) => (
  <StyledText as={tag}>{children}</StyledText>
);
