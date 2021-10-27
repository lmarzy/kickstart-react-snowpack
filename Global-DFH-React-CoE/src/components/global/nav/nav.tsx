import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { StyledNav } from './nav.styled';

interface Route {
  path: string;
  linkName: string;
  exact: boolean;
  component?: ReactNode;
}

export interface NavProps {
  routes: Route[];
}

export const Nav: FC<NavProps> = ({ routes }) => (
  <nav>
    <StyledNav>
      {routes.map((route: Route) => (
        <li key={route.path}>
          <NavLink to={route.path} activeClassName="isActive" exact={route.exact}>
            <span>{route.linkName}</span>
            {route.component && route.component}
          </NavLink>
        </li>
      ))}
    </StyledNav>
  </nav>
);
