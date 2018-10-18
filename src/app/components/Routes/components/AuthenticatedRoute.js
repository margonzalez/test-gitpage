import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bool } from 'prop-types';

import AuthActions from 'redux/auth/actions';

import * as Routes from '../constants';

const DEFAULT_PUBLIC_ROUTE = Routes.SIGN_IN;
const DEFAULT_PRIVATE_ROUTE = Routes.DASHBOARD;

const AuthenticatedRoute = ({
  device,
  isPublicRoute,
  isPrivateRoute,
  initialized,
  currentUser,
  signUpInProgress,
  dispatch,
  component: Comp,
  testSignIn,
  ...props
}) => (
  <Route
    {...props}
    render={routeProps => {
      if (initialized) {
      // if (testSignIn) {
        if (currentUser && isPublicRoute) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PRIVATE_ROUTE,
                state: { from: props.location }
              }}
            />
          );
        }
        if (isPrivateRoute && !currentUser) {
        // if (testSignIn) {
          // dispatch(AuthActions.setEnteredUrl(routeProps.location.pathname));
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE,
                state: { from: props.location }
              }}
            />
          );
        }
      }
      return <Comp {...routeProps} />;
    }}
  />
);

AuthenticatedRoute.propTypes = {
  ...Route.propTypes,
  isPrivateRoute: bool,
  isPublicRoute: bool,
  initialized: bool
};

const mapStateToProps = store => ({
  // currentUser: store.user.currentUser,
  // signUpInProgress: store.auth.signUpFlow.signUpInProgress,
  // initialized: !store.auth.sessionLoading
  testSignIn: true
});

// withRouter is necessary here as a workaround to hijack the shouldComponentUpdate implemented by connect
// Further reading:
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(mapStateToProps)(AuthenticatedRoute));
