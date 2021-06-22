import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '~/components/app/components/nav/nav';
import { Box } from '~/components/general';
import { Heading, Text } from '~/components/typography';

import { StyledHeading } from './header.styled';

export const Header: FC = () => (
  <header>
    <StyledHeading>Hello React</StyledHeading>
    <Link to="/">React With Snowpack</Link>
    <Nav />
    <Heading size={4} mb={2}>
      What
    </Heading>
    <Text size={4} mt={4} mb={4} color="secondary">
      Text
    </Text>
    <Box mb={6}>
      <div>testing 123</div>
    </Box>
  </header>
);
