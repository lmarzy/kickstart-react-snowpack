import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tooltip } from './tooltip';

export default {
  title: 'Components/DataDisplay/Tooltip',
  component: Tooltip,
} as Meta;

export const Default: Story = ({ content, position }) => {
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
      <Tooltip position={position} content={content}>
        <div style={{ padding: '5px 10px', backgroundColor: 'darkgrey', color: 'white' }}>
          HOVER
        </div>
      </Tooltip>
    </div>
  );
};

Default.args = {
  content: 'Some Tooltip Content...',
  position: 'top',
};
