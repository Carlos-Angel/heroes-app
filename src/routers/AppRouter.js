import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginScreen from '../login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashboardRoutes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
