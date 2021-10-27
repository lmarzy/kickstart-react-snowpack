import styled, { css } from 'styled-components';

import { Variant, Size } from './button';

const variantStyles = (variant: Variant) => {
  let background = 'white';
  let borderColor;
  let color;

  if (variant === 'primary') {
    background = `var(--col-blue-medium)`;
    borderColor = 'transparent';
    color = 'white';
  }

  if (variant === 'secondary') {
    borderColor = `var(--col-blue-medium)`;
    color = `var(--col-blue-medium)`;
  }

  if (variant === 'cancel') {
    borderColor = `var(--col-spicyred)`;
    color = `var(--col-spicyred)`;
  }

  return css`
    background-color: ${background};
    border-color: ${borderColor};
    color: ${color};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    transition: box-shadow var(--transition-speed) ease-in;

    &:hover,
    &:focus {
      box-shadow: none;
    }
  `;
};

interface ButtonProps {
  $variant: Variant;
  $size: Size;
  $isFullWidth: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
  height: var(--height-${({ $size }) => $size});
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--border-radius);
  ${({ $variant }) => variantStyles($variant)};

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: default;
  }

  > img {
    height: 100%;
  }
`;
