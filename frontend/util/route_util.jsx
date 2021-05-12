import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom'; 

// can only access if logged out
const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
  )} />
); 

// can only access if logged in
const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
  )} />
); 

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
}); 

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));