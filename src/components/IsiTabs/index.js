import React, { Fragment } from "react";
import { Tabel } from "../../components";
import { MDBAlert, MDBTypography } from "mdbreact";

const IsiTabs = () => {
	return (
		<Fragment>
			<MDBAlert className="teal accent-3">
				<MDBTypography colorText="black" className=" mb-0 pb-0">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</MDBTypography>
			</MDBAlert>

			<h5>Kata Team</h5>
			<h6>Kata Individual</h6>
			<Tabel />
			<h6>Kumite -30kg</h6>
			<Tabel />

			<h6>Kumite +30kg</h6>
			<Tabel />
		</Fragment>
	);
};

export default IsiTabs;
