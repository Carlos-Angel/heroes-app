import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import LoginScreen from '../login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/' component={MarvelScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
