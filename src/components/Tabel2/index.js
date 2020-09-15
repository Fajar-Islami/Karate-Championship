import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable, MDBDataTableV5 } from "mdbreact";

const Tabel2 = ({ data, order, ket }) => {
	return (
		// <MDBTable btn responsive>
		// 	<MDBTableHead columns={kolom} color="primary-color" />
		// 	<MDBTableBody rows={baris} />
		// </MDBTable>
		<MDBDataTableV5 hover order={[order, ket]} data={data} />
	);
};

export default Tabel2;
