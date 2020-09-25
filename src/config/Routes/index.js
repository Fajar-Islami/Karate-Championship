import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, MainApp, SignUp, Login2 } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/login2">
          <Login2 />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
