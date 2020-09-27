import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, MainApp, SignUp, SignIn, ForgotPassword } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/login" exact>
          <Login />
        </Route> */}
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        {/* <Route path="/signup" exact>
          <SignUp />
        </Route> */}
        <Route path="/forgotpassword" exact>
          <ForgotPassword />
        </Route>

        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
