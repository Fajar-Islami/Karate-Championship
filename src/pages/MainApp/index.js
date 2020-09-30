import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header, Sidebar, Header2, Sidebar2, Header3 } from "../../components";
import "./mainApp.scss";
import { MDBContainer, MDBAnimation } from "mdbreact";
import DummyContextProvider from "../../context/dummyContext";
import { RoutesMainApp, ScrollToTop } from "../../config";
const MainApp = () => {
  return (
    // <Fragment>
    //  <DummyContextProvider>
    <Router>
      <ScrollToTop />
      <div className="header-m ">
        {/* <Header /> */}
        {/* <Header2 /> */}
        <Header3 />
      </div>
      {/* <Sidebar /> */}
      {/* <Sidebar2 /> */}
      {/* <div className=" mt-5 pt-4"> */}
      {/* <div className="col-12 mx-auto "> */}
      <RoutesMainApp />
      {/* </div> */}
      {/* </div> */}
      {/* </DummyContextProvider>  */}
      <div className="footer ">
        <MDBAnimation reveal type="fadeInUp">
          <Footer />
        </MDBAnimation>
      </div>
    </Router>
    //  </Fragment>
  );
};

export default MainApp;
