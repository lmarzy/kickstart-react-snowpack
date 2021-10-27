import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Icon, IconProps } from './icon';

export default {
  title: 'Components/General/Icon',
  component: Icon,
} as Meta;

export const Default: Story<IconProps> = (props) => {
  return <Icon {...props} />;
};

Default.args = {
  name: 'logout',
};
