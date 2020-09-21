import React, { Fragment } from "react";
// import { Tabel } from "../../components";
import { MDBBox } from "mdbreact";

const IsiTabs = ({ label, tableType }) => {
	// console.log(tabel);
	return (
		<Fragment>
			<div className="block-example border  border-warning py-3">
				<MDBBox bgColor="warning" color="indigo">
					<h4 className="ml-3 py-1 font-weight-normal"> {label} </h4>
				</MDBBox>
				<div className="px-3">{tableType}</div>
			</div>
			<br />
		</Fragment>
	);
};

export default IsiTabs;
