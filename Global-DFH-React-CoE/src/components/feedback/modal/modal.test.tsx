import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Modal } from './modal';

describe('Modal Component', () => {
  afterEach(cleanup);

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'portal');
  const body = document.querySelector('body') as HTMLElement;
  body.appendChild(modalRoot);

  const handleClose = jest.fn();

  test('renders the modal', () => {
    render(<Modal setVisibility={handleClose}>Modal</Modal>);

    expect(screen.getByText('Modal')).toBeInTheDocument();
  });

  test('modal closes when the esc key is pressed', () => {
    render(
      <Modal setVisibility={handleClose}>
        <button>Cancel</button>
      </Modal>
    );

    fireEvent.keyDown(screen.getByText('Cancel'), { key: 'Escape' });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
