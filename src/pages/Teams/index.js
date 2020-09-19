import React, { useEffect, Fragment } from "react";
import { MDBDataTable, MDBDataTableV5, MDBBtn, MDBIcon } from "mdbreact";
import { dataTeams } from "./data";
import { TabelTeams } from "../../components";

const Teams = () => {
	useEffect(() => {
		document.title = `Teams`;
	});

	// OPsi
	// paging={false} bordered small striped  sorting={false}

	return (
		<Fragment>
			<h3 className="pt-3">Team Entries</h3>
			<hr />

			<TabelTeams small data={dataTeams} alignText={["center", "center", "left", "center", "center", "center", "center"]} />

			<MDBBtn color="default" className="px-3">
				<MDBIcon icon="file-pdf" className="mr-1" /> Export to PDF
			</MDBBtn>
			<MDBBtn color="default" className="px-3">
				Export to Excel <MDBIcon icon="table" className="ml-1" />
			</MDBBtn>
		</Fragment>
	);
};

export default Teams;
