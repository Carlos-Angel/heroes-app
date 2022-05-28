import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginScreen from '../login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../auth/AuthContext';

export default function AppRouter() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRoute isAuthenticated={user.logged}>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path='/*'
            element={
              <PrivateRoute isAuthenticated={user.logged}>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
