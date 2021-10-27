import styled from 'styled-components';

import { Variant } from './cta';

const variantStyles = (variant: Variant) => {
  let color;

  if (variant === 'accept') {
    color = 'freshgreen';
  }

  if (variant === 'edit') {
    color = 'blue';
  }

  if (variant === 'reject' || variant === 'remove') {
    color = 'spicyred';
  }

  return color;
};

interface StyledCtaButtonProps {
  $variant: Variant;
}

export const StyledCtaButton = styled.button<StyledCtaButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--height-small);
  height: var(--height-small);
  background: var(--col-grey-xlight);
  border: 1px solid var(--col-grey-light);
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow var(--transition-speed) ease-in;

  svg {
    fill: ${({ $variant }) => `var(--col-${variantStyles($variant)}-medium)`};
    transition: fill var(--transition-speed) ease-in;
  }

  &:hover,
  &:focus {
    box-shadow: none;
  }
`;
