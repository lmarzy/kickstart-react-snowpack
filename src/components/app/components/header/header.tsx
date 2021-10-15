import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Nav } from '~/components/app/components/nav/nav';
import { Box, Container, Heading, Text } from '~/components/shared';

import { StyledHeader } from './header.styled';

export const Header: FC = () => (
  <StyledHeader>
    <Container>
      <h1>Hello React</h1>
      <Link to="/">React With Snowpack</Link>
      <Nav />
    </Container>
  </StyledHeader>
);
