import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TabelSchedule = ({ data = [], ...rest }) => {
  const [dataEntries] = useState(data);
  console.log(data);
  console.log(dataEntries);
  return (
    <MDBTable responsive small hover className='tabel-biru' bordered {...rest}>
      <MDBTableHead>
        <tr>
          <th
            style={{
              width: "5%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            No
          </th>
          <th
            style={{
              width: "75%",
              textAlign: "left",
              verticalAlign: "center",
            }}
          >
            Contestant
          </th>
          <th
            style={{
              width: "5%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Hari-1
          </th>
          <th
            style={{
              width: "5%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Hari-2
          </th>
          <th
            style={{
              width: "5%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Hari-3
          </th>
          <th
            style={{
              width: "5%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Tatami
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {dataEntries.length > 0 ? (
          <>
            {dataEntries.map((row, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: "center" }}>{i + 1}</td>
                  <td className='pl-3' style={{ textAlign: "left" }}>
                    {row}
                  </td>
                  <td style={{ textAlign: "center" }}></td>
                  <td style={{ textAlign: "center" }}></td>
                  <td style={{ textAlign: "center" }}></td>
                  <td style={{ textAlign: "center" }}></td>
                </tr>
              );
            })}
          </>
        ) : (
          <tr>
            <td colSpan='5' style={{ textAlign: "center" }}>
              {" "}
              <h2>No Data</h2>
            </td>
          </tr>
        )}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TabelSchedule;
