import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Bracket, Categories, Guidance, Medals, SchedulesResult, Statistic, Teams, Home, Login, DetailDummy, Dummy } from "../../pages";
import { Footer, Header } from "../../components";
import "./mainApp.scss";
import { MDBContainer } from "mdbreact";
import DummyContextProvider from "../../context/dummyContext";
const MainApp = () => {
	return (
		<Fragment>
			<MDBContainer fluid>
				<DummyContextProvider>
					<Router>
						<div className="header position-sticky">
							<Header />
						</div>

						<div className="content col-11 ml-5">
							{/* <MDBRow>
						<MDBCol size="11"> */}
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
								{/* <Route path="/detail-dummy/:id" component={DetailDummy} /> */}
								<Route path="/dummy/">
									<Dummy />
								</Route>
								<Route path="/detail-dummy/:id">
									<DetailDummy />
								</Route>
								<Route path="/" exact>
									<Home />
								</Route>
							</Switch>
						</div>
					</Router>
				</DummyContextProvider>
			</MDBContainer>
			<div className="footer">
				<Footer />
			</div>
		</Fragment>
	);
};

export default MainApp;
