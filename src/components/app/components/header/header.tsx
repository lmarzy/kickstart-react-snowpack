import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '~/components/app/components/nav/nav';
import { Heading } from '~/components/typography';

import { StyledHeading } from './header.styled';

export const Header: FC = () => (
  <header>
    <StyledHeading>Hello React</StyledHeading>
    <Link to="/">React With Snowpack</Link>
    <Nav />
    <Heading size={1} />
  </header>
);
