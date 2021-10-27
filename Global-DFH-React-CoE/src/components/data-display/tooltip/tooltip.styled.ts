import styled from 'styled-components';

import { TooltipPosition } from './tooltip';

type StyledTooltipProps = {
  position: TooltipPosition;
};

export const StyledTooltip = styled.div<StyledTooltipProps>`
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  color: var(--col-white);
  display: none;
  max-width: 200px;
  padding: var(--spacing-2);
  position: absolute;
  text-align: center;
  width: max-content;
  z-index: 3;

  ${({ position }) => {
    switch (position) {
      case 'left':
        return `
          top: 50%;
          right: calc(100% + 8px);
          transform: translateY(-50%);
        `;
      case 'right':
        return `
          top: 50%;
          left: calc(100% + 8px);
          transform: translateY(-50%);
        `;
      case 'bottom-left':
        return `
          top: calc(100% + 8px);
          left: 100%;
          transform: translateX(-100%);
        `;
      case 'bottom-right':
        return `
          top: calc(100% + 8px);
          right: 100%;
          transform: translateX(100%);
        `;
      case 'bottom':
        return `
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'top-left':
        return `
          bottom: calc(100% + 8px);
          left: 100%;
          transform: translateX(-100%);
        `;
      case 'top-right':
        return `
          bottom: calc(100% + 8px);
          right: 100%;
          transform: translateX(100%);
        `;
      case 'top':
      default:
        return `
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  p + p {
    margin-top: var(--spacing-2);
  }
`;

export const StyledTooltipContainer = styled.div<StyledTooltipProps>`
  position: relative;

  ${StyledTooltip} {
    background-color: #484848;
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    z-index: 4;

    ${({ position }) => {
      switch (position) {
        case 'left':
          return `
            border-bottom: 10px solid transparent;
            border-left: 10px solid #484848;
            border-top: 8px solid transparent;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'right':
          return `
            border-bottom: 8px solid transparent;
            border-right: 8px solid #484848;
            border-top: 8px solid transparent;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'bottom':
        case 'bottom-left':
        case 'bottom-right':
          return `
            border-bottom: 8px solid #484848;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
          `;
        case 'top':
        case 'top-left':
        case 'top-right':
        default:
          return `
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 10px solid #484848;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
          `;
      }
    }};
  }

  &:hover {
    cursor: pointer;

    ${StyledTooltip}, &::after {
      display: block;
    }
  }
`;
