import React, { useState } from "react";
import { MDBTableHead, MDBTable, MDBTableBody } from "mdbreact";
import { ICGoldM, ICSilverM, ICBronzeM } from "../../assets";
import Image from "../Image";
import "./style.scss";

const TabelMedals = ({ data = [], ...rest }) => {
  const [dataEntries, setDataEntries] = useState(data);
  // console.log(data);
  return (
    <MDBTable className="table-medals" striped responsive>
      <MDBTableHead color=" green accent-3" textWhite>
        <tr>
          <th className="font-weight-bold" style={{ width: "7%", textAlign: "center" }}>
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
        {dataEntries.map((data, i) => {
          return (
            <tr key={i}>
              <td style={{ textAlign: "center" }}>{i + 1}</td>
              <td className="pl-3" style={{ textAlign: "left" }}>
                {data.team}
              </td>
              <td style={{ textAlign: "center" }}>{data.gold}</td>
              <td style={{ textAlign: "center" }}>{data.silver}</td>
              <td style={{ textAlign: "center" }}>{data.bronze}</td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TabelMedals;
