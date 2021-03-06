import React, { useState } from 'react';
import { MDBTableHead, MDBTable, MDBTableBody } from 'mdbreact';
import { ICGoldM, ICSilverM, ICBronzeM } from '../../assets';
import './style.scss';

const TabelMedalsHome = ({ data = [], ...rest }) => {
  const [dataEntries] = useState(data);
  // console.log(data);
  return (
    <MDBTable className='table-medals' striped responsive small>
      <MDBTableHead color=' green accent-3' textWhite>
        <tr>
          <th
            className='font-weight-bold'
            style={{ width: '7%', textAlign: 'center' }}>
            No
          </th>
          <th className='font-weight-bold'>Team</th>
          <th style={{ width: '15%', textAlign: 'center' }}>
            <img src={ICGoldM} style={{ height: '30px' }} />
          </th>
          <th style={{ width: '15%', textAlign: 'center' }}>
            <img src={ICSilverM} style={{ height: '30px' }} />
          </th>
          <th style={{ width: '15%', textAlign: 'center' }}>
            <img src={ICBronzeM} style={{ height: '30px' }} />
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {dataEntries.map((data, i) => {
          return (
            <tr key={i}>
              <td style={{ textAlign: 'center' }}>{i + 1}</td>
              <td className='pl-3' style={{ textAlign: 'left' }}>
                {data.team}
              </td>
              <td style={{ textAlign: 'center' }}>{data.gold}</td>
              <td style={{ textAlign: 'center' }}>{data.silver}</td>
              <td style={{ textAlign: 'center' }}>{data.bronze}</td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TabelMedalsHome;
