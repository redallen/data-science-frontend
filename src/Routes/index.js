import { Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Bullseye, Spinner } from '@patternfly/react-core';

const LauncherPage = lazy(() => import('odh/Launcher'));

export const Routes = () => {
  return (
    <Suspense
      fallback={
        <Bullseye>
          <Spinner />
        </Bullseye>
      }
    >
      <Switch>
        <Route path="/enabled" component={() => 'enabled'} />
        <Route path="/resources" component={() => 'resources'} />
        <Route path="/explore" exact component={LauncherPage} />
        <Route>
          <Redirect to="/explore" />
        </Route>
      </Switch>
    </Suspense>
  );
};
