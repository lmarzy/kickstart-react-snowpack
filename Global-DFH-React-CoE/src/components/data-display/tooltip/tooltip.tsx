import React, { FC } from 'react';

import { StyledTooltipContainer, StyledTooltip } from './tooltip.styled';

export type TooltipPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'top';

export interface TooltipProps {
  content: string;
  position: TooltipPosition;
}

export const Tooltip: FC<TooltipProps> = ({ content, position, children }) => (
  <StyledTooltipContainer position={position}>
    <StyledTooltip position={position}>{content}</StyledTooltip>
    {children}
  </StyledTooltipContainer>
);
