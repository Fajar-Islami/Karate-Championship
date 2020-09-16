import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable, MDBDataTableV5 } from "mdbreact";

const Tabel2 = ({ data, ...rest }) => {
	return (
		// <MDBTable btn responsive>
		// 	<MDBTableHead columns={kolom} color="primary-color" />
		// 	<MDBTableBody rows={baris} />
		// </MDBTable>

		<MDBDataTableV5 responsive hover data={data} entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} {...rest} />
		// <MDBDataTableV5  hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
	);
};

export default Tabel2;
