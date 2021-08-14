import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginScreen from '../login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

export default function AppRouter() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <PrivateRoute
            path='/'
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
