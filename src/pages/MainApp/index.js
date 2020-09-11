import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header } from "../../components";
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
			<MDBContainer className=" mt-5 pt-5" fluid>
				<div className="content col-11 m-auto">
					<RoutesMainApp />
				</div>
			</MDBContainer>
			{/* </DummyContextProvider>  */}
			<div className="footer">
				<Footer />
			</div>
		</Router>
		//  </Fragment>
	);
};

export default MainApp;
