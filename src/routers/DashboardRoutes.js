import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';

export default function DashboardRoutes() {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/hero/heroId' component={HeroScreen} />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  );
}
