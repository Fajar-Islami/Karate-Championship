import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Bracket, Home, Categories, Footer, Guidance, Login, Medals, Registration, SchedulesResult, SideBar, Statistic, Teams } from "../../pages";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/bracket">
					<Bracket />
				</Route>
				<Route path="/categories">
					<Categories />
				</Route>
				<Route path="/footer">
					<Footer />
				</Route>
				{/* <Route path="/galeri">
					<Galeri />
				</Route> */}
				<Route path="/guidance">
					<Guidance />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/medals">
					<Medals />
				</Route>
				<Route path="/registration">
					<Registration />
				</Route>
				<Route path="/schedulesResult">
					<SchedulesResult />
				</Route>
				{/* <Route path="/sidebar">
					<SideBar />
				</Route> */}
				<Route path="/statistic">
					<Statistic />
				</Route>
				<Route path="/teams">
					<Teams />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
