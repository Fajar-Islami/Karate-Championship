import React from "react";
import { MDBTableHead, MDBTable, MDBTableBody } from "mdbreact";
import { ICGoldM, ICSilverM, ICBronzeM } from "../../assets";
import Image from "../Image";
import "./style.scss";

const TabelMedals = () => {
  return (
    <MDBTable className="table-medals" striped>
      <MDBTableHead color=" green accent-3" textWhite>
        <tr>
          <th className="font-weight-bold" style={{ width: "7%" }}>
            No
          </th>
          <th className="font-weight-bold">Team</th>
          <th style={{ width: "10%", textAlign: "center" }}>
            <Image image={ICGoldM} height="30px" />
          </th>
          <th style={{ width: "10%", textAlign: "center" }}>
            <Image image={ICSilverM} height="30px" />
          </th>
          <th style={{ width: "10%", textAlign: "center" }}>
            <Image image={ICBronzeM} height="30px" />
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>100</td>
          <td>100</td>
          <td>110</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>100</td>
          <td>100</td>
          <td>110</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>100</td>
          <td>100</td>
          <td>110</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry</td>
          <td>100</td>
          <td>100</td>
          <td>110</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Larry</td>
          <td>100</td>
          <td>100</td>
          <td>110</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default TabelMedals;
