import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Bracket, Categories, Guidance, Medals, SchedulesResult, Statistic, Teams, Home, Login, DetailDummy, Dummy } from "../../pages";
import { Footer, Header } from "../../components";
import "./mainApp.scss";
import { MDBContainer, MDBNavbar } from "mdbreact";
import DummyContextProvider from "../../context/dummyContext";
import { useHistory, Link } from "react-router-dom";
const MainApp = () => {
	const history = useHistory();

	return (
		<Fragment>
			<DummyContextProvider>
				<Router>
					<div className="header ">
						{/* <MDBNavbar color="default-color" dark expand="md" scrolling fixed="top" className=""> */}
						<Header />
						{/* </MDBNavbar> */}
					</div>
					<MDBContainer className=" mt-5 pt-5" fluid>
						<div className="content col-11 ml-5">
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
								<Route path="/dummy/">
									<Dummy />
								</Route>
								{/* <Route path="/detail-dummy/:id" component={DetailDummy} /> */}
								<Route path="/detail-dummy/:id">
									<DetailDummy />
								</Route>
								{/* <Route path="/login">
									<Login />
								</Route> */}
								<Route path="/" exact>
									<Home />
								</Route>
							</Switch>
						</div>
					</MDBContainer>
				</Router>
			</DummyContextProvider>
			<div className="footer">
				<Footer />
			</div>
		</Fragment>
	);
};

export default MainApp;
