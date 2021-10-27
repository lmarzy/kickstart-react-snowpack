import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Cta } from './cta';

export default {
  title: 'Components/General/Cta',
  component: Cta,
} as Meta;

export const Default: Story = ({ variant, infoText }) => {
  return <Cta variant={variant} infoText={infoText} />;
};

Default.args = {
  variant: 'accept',
  infoText: 'accept the request',
};
