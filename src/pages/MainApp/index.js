import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Bracket, Categories, Guidance, Medals, SchedulesResult, Statistic, Teams, Home, Login } from "../../pages";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const MainApp = () => {
	return (
		<Router>
			<MDBNav>
				<MDBNavItem>
					<MDBNavLink to="/">Home</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/bracket">Bracket</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/categories">Categories</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/guidance">Guidance</MDBNavLink>
				</MDBNavItem>
				{/* <MDBNavItem>
					<MDBNavLink to="/login">Login</MDBNavLink>
				</MDBNavItem> */}
				<MDBNavItem>
					<MDBNavLink to="/medals">Medals</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/schedulesResult">SchedulesResult</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/statistic">Statistic</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/teams">Teams</MDBNavLink>
				</MDBNavItem>
			</MDBNav>

			<Switch>
				<Route path="/bracket">
					<Bracket />
				</Route>
				<Route path="/categories">
					<Categories />
				</Route>
				<Route path="/guidance">
					<Guidance />
				</Route>
				<Route path="/medals">
					<Medals />
				</Route>
				<Route path="/schedulesResult">
					<SchedulesResult />
				</Route>
				<Route path="/statistic">
					<Statistic />
				</Route>
				<Route path="/teams">
					<Teams />
				</Route>
				{/* <Route path="/login">
					<Login />
				</Route> */}
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default MainApp;
