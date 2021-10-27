import React, { FC } from 'react';

import { FeedbackType } from '../../../shared/types-styles';

import { StyledSpan } from './badge.styled';

interface BadgeProps {
  type: FeedbackType;
}

export const Badge: FC<BadgeProps> = ({ type, children }) => (
  <StyledSpan $type={type}>{children}</StyledSpan>
);
