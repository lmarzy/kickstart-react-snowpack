import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../config/routes';
import GlobalStyles from '../../styles/global';

import { Header } from './components/header/header';

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
        </Switch>
      </main>
    </>
  );
};
