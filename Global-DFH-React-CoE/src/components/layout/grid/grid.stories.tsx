import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Grid } from './grid';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
} as Meta;

const Template: Story = ({ span }) => (
  <Grid>
    <Grid.Item span={span}>1</Grid.Item>
    <Grid.Item span={span}>2</Grid.Item>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  span: 6,
};
