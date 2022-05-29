import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginScreen from '../login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useAuth } from '../hooks/useAuth.hook';

export default function AppRouter() {
  const { logged } = useAuth();

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRoute isAuthenticated={logged}>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path='/*'
            element={
              <PrivateRoute isAuthenticated={logged}>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
