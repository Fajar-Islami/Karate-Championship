import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable, MDBDataTableV5 } from "mdbreact";

const Tabel2 = ({ data, order, ket, ...rest }) => {
	return (
		// <MDBTable btn responsive>
		// 	<MDBTableHead columns={kolom} color="primary-color" />
		// 	<MDBTableBody rows={baris} />
		// </MDBTable>
		<MDBDataTableV5 responsive hover striped bordered small order={[order, ket]} data={data} {...rest} />
	);
};

export default Tabel2;
