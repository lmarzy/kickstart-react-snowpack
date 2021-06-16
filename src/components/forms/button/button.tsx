import React, { ButtonHTMLAttributes, FC } from 'react';

import { ColorType } from '../../../shared/types-styles';

import { StyledButton } from './button.styled';

export type Variant = 'solid' | 'outline';
export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorTheme?: ColorType;
  variant?: Variant;
  size?: Size;
  isFullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  colorTheme = 'blue',
  variant = 'solid',
  size = 'medium',
  isFullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      $colorTheme={colorTheme}
      $size={size}
      $variant={variant}
      $isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
