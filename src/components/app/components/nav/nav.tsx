import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { HOME, ABOUT } from '../../../../config/routes';

export const Nav: FC = () => (
  <nav>
    <ul>
      <li>
        <Link to={HOME.path}>Home</Link>
      </li>
      <li>
        <Link to={ABOUT.path}>About</Link>
      </li>
    </ul>
  </nav>
);
