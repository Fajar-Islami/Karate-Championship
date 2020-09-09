import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, MainApp } from "../../pages";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" exact>
					<Login />
				</Route>

				<Route path="/">
					<MainApp />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
