import React, { Fragment } from "react";
// import { Tabel } from "../../components";
import { MDBAlert, MDBTypography, MDBBox } from "mdbreact";

const IsiTabs = ({ judul, tabel }) => {
	// console.log(tabel);
	return (
		<Fragment>
			{/* <MDBAlert className="warning-color">
				<MDBTypography colorText="primary-color-dark" className="font-weight-bold mb-0 pb-0">
					{judul}
				</MDBTypography>
			</MDBAlert> */}
			<MDBBox bgColor="warning" color="indigo" className="font-weight-normal">
				<p className="ml-3 py-1"> {judul} </p>
			</MDBBox>
			{tabel}

			{/* <h5>Kata Team</h5>
			<h6>Kata Individual</h6>
			<Tabel />
			<h6>Kumite -30kg</h6>
			<Tabel />

			<h6>Kumite +30kg</h6>
			<Tabel /> */}
		</Fragment>
	);
};

export default IsiTabs;
