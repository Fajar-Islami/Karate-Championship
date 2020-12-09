import React from 'react';
import { MDBDataTable } from 'mdbreact';

import './style.scss';

const TabelMedals = ({ data = [] }) => {
  return (
    <>
      <MDBDataTable
        theadColor='indigo'
        responsive
        hover
        className='tabel-medals count'
        bordered
        small
        order={['rangking', 'asc']}
        data={data}
      />
    </>
  );
};

export default TabelMedals;
