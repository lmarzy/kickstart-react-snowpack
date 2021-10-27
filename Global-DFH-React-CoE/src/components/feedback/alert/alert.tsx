import React, { FC } from 'react';

import { FeedbackType } from '../../../shared/types-styles';

import { StyledAlert } from './alert.styled';

export interface AlertProps {
  tag?: 'p' | 'span';
  type: FeedbackType;
}

export const Alert: FC<AlertProps> = ({ tag = 'p', type, children }) => (
  <StyledAlert as={tag} $type={type}>
    {children}
  </StyledAlert>
);
