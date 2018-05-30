import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Login from './login';

const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={Login} />
    <Redirect from="/auth" to="/auth/login" />
  </Switch>
);
export default Routes;
