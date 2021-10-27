import React, { FC } from 'react';

import { Container } from '../../layout/container/container';

import logo from './logo.svg';
import {
  StyledHeader,
  StyledHeaderInner,
  StyledBrand,
  StyledChildren,
} from './header.styled';

interface HeaderProps {
  appName: string;
}

export const Header: FC<HeaderProps> = ({ appName, children }) => (
  <StyledHeader>
    <Container>
      <StyledHeaderInner>
        <StyledBrand to="/">
          <img src={logo} alt="mars logo" />
          <p>{appName}</p>
        </StyledBrand>
        <StyledChildren>{children}</StyledChildren>
      </StyledHeaderInner>
    </Container>
  </StyledHeader>
);
