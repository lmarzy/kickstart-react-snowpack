import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '../../sections';

export const Header: FC = () => (
  <header>
    <Link to="/">React With Snowpack</Link>
    <Nav />
  </header>
);
