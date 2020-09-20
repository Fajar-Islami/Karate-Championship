import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header, Sidebar } from "../../components";
import "./mainApp.scss";
import { MDBContainer } from "mdbreact";
import DummyContextProvider from "../../context/dummyContext";
import { RoutesMainApp } from "../../config";
const MainApp = () => {
	return (
		// <Fragment>
		//  <DummyContextProvider>
		<Router>
			<div className="header ">
				<Header />
			</div>
			<Sidebar />
			<div id="content" className=" mt-5 pt-4">
				<div className="col-12 mx-auto ">
					<RoutesMainApp />
				</div>
			</div>
			{/* </DummyContextProvider>  */}
			<div className="footer " id="content">
				<Footer />
			</div>
		</Router>
		//  </Fragment>
	);
};

export default MainApp;
