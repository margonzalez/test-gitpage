import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';

import { history } from 'redux/store';
import Dashboard from 'app/screens/Dashboard';
import SignIn from 'app/screens/SignIn';

import PublicLocalization from '../../screens/PublicLocalization';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import * as Routes from './constants';

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <AuthenticatedRoute isPublicRoute exact path={Routes.SIGN_IN} component={SignIn} />
        <AuthenticatedRoute isPublicRoute exact path={Routes.PUBLIC_MAP} component={PublicLocalization} />
        <AuthenticatedRoute isPrivateRoute path={Routes.DASHBOARD} component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  );
}

export default AppRoutes;
