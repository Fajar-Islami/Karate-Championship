import React, { useEffect, Fragment } from "react";
import { MDBBtn, MDBIcon, MDBContainer, MDBAnimation } from "mdbreact";
import { dataTeams } from "./data";
import { TabelTeams } from "../../components";

const Teams = () => {
  useEffect(() => {
    document.title = `Teams`;
  });

  return (
    <Fragment>
      <MDBContainer fluid>
        <MDBAnimation reveal type="fadeInUp">
          <h3 className="pt-3">Team Entries</h3>
          <hr />
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <TabelTeams small data={dataTeams} alignText={["center", "center", "left", "center", "center", "center", "center"]} />
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBBtn color="default" className="px-3">
            <MDBIcon icon="file-pdf" className="mr-1" /> Export to PDF
          </MDBBtn>
          <MDBBtn color="default" className="px-3">
            Export to Excel <MDBIcon icon="table" className="ml-1" />
          </MDBBtn>
        </MDBAnimation>
      </MDBContainer>
    </Fragment>
  );
};

export default Teams;
