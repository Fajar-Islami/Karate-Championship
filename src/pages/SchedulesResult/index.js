import React, { useState, useEffect, Fragment } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBtnGroup, MDBBtn, MDBBadge, MDBTable, MDBCardBody, MDBTableBody } from "mdbreact";
// import { Tabel } from "../../components";

const SchedulesResult = () => {
  const [activeItem, setActiveItem] = useState("1");

  const handleToggle = (tab) => (e) => {
    console.log(tab);
    if (activeItem !== tab) {
      console.log("beda");
      setActiveItem((activeItem) => tab);
    }
  };
  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Schedules & Result`;
  });
  return (
    <Fragment>
      <h1 className="pt-3"> Halaman Schedules dan Result</h1>
      <hr />
      <MDBBtnGroup className="ml-1 mb-3" alt="150x75">
        <MDBBtn link to="#" active={activeItem === "1"} onClick={handleToggle("1")}>
          Full Schedules
        </MDBBtn>
        <MDBBtn link to="#" active={activeItem === "2"} onClick={handleToggle("2")}>
          Daily Schedule
        </MDBBtn>
        <MDBBtn link to="#" active={activeItem === "3"} onClick={handleToggle("3")}>
          Results
        </MDBBtn>
      </MDBBtnGroup>
      {/* </MDBNav> */}

      <div className="block-example border border-light p-2">
        {/* <div className="block-example border border-dark"> */}
        {/* Content */}
        <MDBTabContent activeItem={activeItem}>
          <MDBTabPane tabId="1" role="tabpanel">
            {/* <Tabel /> */}
          </MDBTabPane>

          <MDBTabPane tabId="2" role="tabpanel">
            {/* <Tabel /> */}
          </MDBTabPane>

          <MDBTabPane tabId="3" role="tabpanel">
            {/* <Tabel /> */}
          </MDBTabPane>
        </MDBTabContent>
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default SchedulesResult;
