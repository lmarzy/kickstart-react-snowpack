import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InputButton } from '../';

import { InputButtonProps } from './input-button';

export default {
  title: 'Components/Forms/InputButton',
  component: InputButton,
} as Meta;

export const Default: Story<InputButtonProps> = (props) => {
  return <InputButton {...props}>Radio Input</InputButton>;
};

Default.args = {
  type: 'radio',
  id: 'id',
  name: 'name',
  value: 'value',
};
