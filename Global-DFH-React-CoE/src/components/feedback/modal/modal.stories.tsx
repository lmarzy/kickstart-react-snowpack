import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal } from './modal';

export default {
  title: 'Components/Feeback/modal',
  component: Modal,
} as Meta;

export const Default: Story = ({ size }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'portal');
  const body = document.querySelector('body') as HTMLElement;
  body.appendChild(modalRoot);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <button onClick={() => setModalVisibility(true)}>Show Modal</button>
      {modalVisibility && (
        <Modal setVisibility={setModalVisibility} size={size}>
          <button onClick={() => setModalVisibility(false)}>Cancel</button>
        </Modal>
      )}
    </div>
  );
};

Default.args = {
  size: 'small',
};
