import React, { FC } from 'react';

import { VisuallyHidden } from '../../typography/visually-hidden/visually-hidden';
import { Icon, IconNames } from '../icon/icon';

import { StyledCtaButton } from './cta.styled';

export type Variant = 'accept' | 'reject' | 'remove' | 'edit';

export interface CtaProps {
  variant: Variant;
  infoText: string;
  onClick?: () => void;
}

interface VariantsInterface {
  [index: string]: IconNames;
}

export const Cta: FC<CtaProps> = ({ variant, infoText, onClick }) => {
  const iconNames: VariantsInterface = {
    accept: 'check',
    reject: 'cross',
    remove: 'bin',
    edit: 'pencil',
  };

  return (
    <StyledCtaButton $variant={variant} onClick={onClick}>
      <Icon name={iconNames[variant]} />
      <VisuallyHidden>{infoText}</VisuallyHidden>
    </StyledCtaButton>
  );
};
