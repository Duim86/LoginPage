import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import RecoveryPassword from './pages/RecoveryPassword';
import NewPassword from './pages/NewPassword';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recovery" component={RecoveryPassword} />
        <Route path="/newpassword" component={NewPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
