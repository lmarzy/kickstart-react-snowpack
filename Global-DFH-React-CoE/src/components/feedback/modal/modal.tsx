import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from '../../../hooks/use-portal';

import { StyledModalContainer, StyledModal } from './modal.styled';

export type ModalSizes = 'small' | 'large';

export type ModalProps = {
  size?: ModalSizes;
  setVisibility: (arg0: boolean) => void;
};

export const Modal: FC<ModalProps> = ({ size = 'small', children, setVisibility }) => {
  const modalRef = usePortal(setVisibility);

  return createPortal(
    <StyledModalContainer>
      <StyledModal ref={modalRef} size={size}>
        {children}
      </StyledModal>
    </StyledModalContainer>,
    document.getElementById('portal') as HTMLElement
  );
};
