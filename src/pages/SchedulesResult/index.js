import { MDBContainer } from "mdbreact";
import React, { useEffect, Fragment } from "react";
import { TabelSchedule } from "../../components";
import { dataJadwal } from "./data";

const SchedulesResult = () => {
  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Schedules & Result`;
  }, []);

  return (
    <Fragment>
      <MDBContainer fluid>
        <hr className='my-4' />
        <TabelSchedule data={dataJadwal} />
      </MDBContainer>
    </Fragment>
  );
};

export default SchedulesResult;
