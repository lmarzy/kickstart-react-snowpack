import React, { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './button.styled';

export type Variant = 'primary' | 'secondary';
export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isFullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isFullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      $variant={variant}
      $size={size}
      $isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
