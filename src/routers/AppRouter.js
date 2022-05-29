import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginScreen from 'components/login/LoginScreen';
import DashboardRoutes from 'routers/DashboardRoutes';
import { PrivateRoute } from 'routers/PrivateRoute';
import { PublicRoute } from 'routers/PublicRoute';
import { useAuth } from 'hooks/useAuth.hook';

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
