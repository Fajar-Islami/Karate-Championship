import React, { Fragment, useState, useEffect } from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const TabelMatchesHome = ({ data = [], upcomingM = false, ...rest }) => {
  const [dataEntries] = useState(data);

  return (
    <>
      <MDBTable className='tabel-biru ' responsive {...rest}>
        <MDBTableBody>
          {dataEntries.map((data, i) => {
            return (
              <>
                {upcomingM ? (
                  <>
                    <tr key={i} style={{ border: '3px solid' }}>
                      <td style={{ textAlign: 'center', width: '80%' }}>
                        {data.team1}
                      </td>
                      <td style={{ textAlign: 'center', width: '20%' }}>
                        {data.team1_result}
                      </td>
                    </tr>
                    <tr key={i} style={{ border: '3px solid' }}>
                      <td style={{ textAlign: 'center', width: '80%' }}>
                        {data.team2}
                      </td>
                      <td style={{ textAlign: 'center', width: '20%' }}>
                        {data.team2_result}
                      </td>
                    </tr>
                  </>
                ) : (
                  <tr key={i} style={{ border: '3px solid' }}>
                    <td style={{ textAlign: 'center', width: '48%' }}>
                      {data.team1}
                    </td>
                    <td style={{ textAlign: 'center', width: '4%' }}>VS</td>
                    <td style={{ textAlign: 'center', width: '48%' }}>
                      {data.team2}
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default TabelMatchesHome;
