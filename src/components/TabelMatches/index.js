import React, { Fragment, useState, useEffect } from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const TabelMatches = ({ data = [], upcomingM = 'false', ...rest }) => {
  const [dataEntries] = useState(data);

  return (
    <Fragment>
      {dataEntries.map((data, i) => {
        return (
          <>
            {upcomingM === 'false' ? (
              <>
                <h6>{data.date}</h6>
                <MDBTable striped responsive bordered {...rest}>
                  <MDBTableBody>
                    <tr>
                      <td style={{ textAlign: 'center' }}>{data.team1}</td>
                      <td style={{ textAlign: 'center' }}>
                        {data.team1_result}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: 'center' }}>{data.team2}</td>
                      <td style={{ textAlign: 'center' }}>
                        {data.team2_result}
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </>
            ) : (
              <>
                <MDBTable striped responsive bordered {...rest}>
                  <MDBTableBody>
                    <tr>
                      <td style={{ textAlign: 'center' }}>{data.team1}</td>
                      <td
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          backgroundColor: 'white',
                          width: '20%',
                        }}
                        rowSpan={2}>
                        {data.date}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: 'center' }}>{data.team2}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </>
            )}
          </>
        );
      })}
    </Fragment>
  );
};

export default TabelMatches;
