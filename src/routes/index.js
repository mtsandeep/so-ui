import React from 'react';
import { Route } from 'react-router';

import AuthRoutes from './auth';

const Routes = () => (
  <Route path="/">
    <AuthRoutes />
  </Route>
);

export default Routes;
