import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainApp, SignIn, ForgotPassword } from '../../pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Route path='/forgotpassword' exact>
          <ForgotPassword />
        </Route>

        <Route path='/'>
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
