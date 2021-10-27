import styled, { keyframes } from 'styled-components';

import { pxToRem } from '../../..';

import { ModalSizes } from './modal';

const fadein = keyframes`
  100% { opacity: 1; transform: translateY(0) }
`;

type StyledModalProps = {
  size: ModalSizes;
};

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div<StyledModalProps>`
  width: ${({ size }) => pxToRem(size === 'small' ? 400 : 800)};
  padding: var(--spacing-4);
  background-color: var(--col-white);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  border-radius: var(--border-radius);
  overflow: hidden;
  opacity: 0;
  transform: translateY(-100px);
  animation: ${fadein} 500ms forwards;
`;
