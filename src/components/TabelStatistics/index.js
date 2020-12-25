import React, { Fragment, useState,useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TabelStatistics = ({ data = [], tableTitle, ...rest }) => {
  const [dataEntries] = useState(data);

  return (
    <>
    <h5 className='mt-3 text-primary font-weight-normal'> {tableTitle} </h5>
      <MDBTable responsive small hover className='tabel-biru' {...rest}>
      <MDBTableHead >
      <tr>
              <th
                style={{
                  width: '5%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}>
                No
              </th>
              <th
                style={{
                  width: '80%',
                  textAlign: 'left',
                  verticalAlign: 'center',
                }}>
                Contestant
              </th>
              <th
                style={{
                  width: '5%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}>
                Win
              </th>
              <th
                style={{
                  width: '5%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}>
                Point
              </th>
              <th
                style={{
                  width: '5%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}>
                Total
              </th>
            </tr>
      </MDBTableHead>
      <MDBTableBody>
        {dataEntries.length > 0 ?
        <>
        {dataEntries.map((row, i) => {
          return (
            <tr>
              <td style={{ textAlign: 'center' }}>{i + 1}</td>
              <td className='pl-3' style={{ textAlign: 'left' }}>
                {row.contestant}
              </td>
              <td style={{ textAlign: 'center' }}>{row.win}</td>
              <td style={{ textAlign: 'center' }}>{row.point}</td> 
              <td style={{ textAlign: 'center' }}>{row.win+row.point}</td>
            </tr>
          );
        })}
        </>
        :
        <tr>
          <td colSpan='5' style={{textAlign:'center'}} > <h2>No Data</h2></td>
        </tr>
      }
      </MDBTableBody>

     
    </MDBTable>
    </>
  );
};

export default TabelStatistics;
