import React, { ButtonHTMLAttributes, FC } from 'react';

import { Loading } from '../../feedback/loading/loading';

import { StyledButton } from './button.styled';

export type Variant = 'primary' | 'secondary' | 'cancel';
export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  isFullWidth?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isFullWidth = false,
  loading = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      $variant={variant}
      $size={size}
      disabled={disabled}
      $isFullWidth={isFullWidth}
      {...props}
    >
      {loading ? <Loading /> : children}
    </StyledButton>
  );
};
