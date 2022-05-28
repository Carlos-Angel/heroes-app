import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();
  localStorage.setItem('lastPath', `${location.pathname}${location.search}`);

  return isAuthenticated ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
