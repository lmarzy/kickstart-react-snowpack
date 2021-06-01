import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import routes from '../../config/routes';
import { Header } from '../layout/header/header';

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
