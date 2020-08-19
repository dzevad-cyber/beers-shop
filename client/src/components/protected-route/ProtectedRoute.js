import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!rest.user) return <Redirect to="/" />;
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
