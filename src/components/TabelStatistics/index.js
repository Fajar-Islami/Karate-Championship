import React, { Fragment, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable } from 'mdbreact';

const TabelStatistics = ({ datas = [], tableTitle, ...rest }) => {
  // const [dataEntries] = useState(data);
  // console.log(dataEntries);
  // console.log(data);

  // return (
  //   <Fragment>
  //     <h5 className='mt-3 text-primary font-weight-normal'> {tableTitle} </h5>

  //     {data.length > 0 ? (
  //       <MDBTable responsive hover className='tabel-biru' bordered {...rest}>
  //         <MDBTableHead>
  //           <tr>
  //             <th
  //               style={{
  //                 width: '2%',
  //                 textAlign: 'center',
  //                 verticalAlign: 'middle',
  //               }}>
  //               No
  //             </th>
  //             <th
  //               style={{
  //                 width: '80%',
  //                 textAlign: 'left',
  //                 verticalAlign: 'middle',
  //               }}>
  //               Contestant
  //             </th>
  //             <th
  //               style={{
  //                 width: '5%',
  //                 textAlign: 'center',
  //                 verticalAlign: 'middle',
  //               }}>
  //               Win
  //             </th>
  //             <th
  //               style={{
  //                 width: '5%',
  //                 textAlign: 'center',
  //                 verticalAlign: 'middle',
  //               }}>
  //               Point
  //             </th>
  //             <th
  //               style={{
  //                 width: '5%',
  //                 textAlign: 'center',
  //                 verticalAlign: 'middle',
  //               }}>
  //               Total
  //             </th>
  //           </tr>
  //         </MDBTableHead>
  //         <MDBTableBody>
  //           {dataEntries.map((data, i) => {
  //             return (
  //               <tr>
  //                 <td style={{ textAlign: 'center' }}>{i + 1}</td>
  //                 <td className='pl-3' style={{ textAlign: 'left' }}>
  //                   {data.contestant}
  //                 </td>
  //                 <td style={{ textAlign: 'center' }}>{data.win}</td>
  //                 <td style={{ textAlign: 'center' }}>{data.point}</td>
  //                 <td style={{ textAlign: 'center' }}>
  //                   {data.win + data.point}
  //                 </td>
  //               </tr>
  //             );
  //           })}
  //         </MDBTableBody>
  //       </MDBTable>
  //     ) : (
  //       ''
  //     )}
  //   </Fragment>
  // );
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170',
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86',
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433',
      },
    ],
  };

  return (
    <MDBDataTable
      responsive
      hover
      className='tabel-biru'
      striped
      bordered
      small
      order={['age', 'asc']}
      data={data}
    />
  );
};

export default TabelStatistics;
