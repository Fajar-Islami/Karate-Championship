import React, { useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTableV5, MDBDataTable } from "mdbreact";
import "./style.scss";

const Tabel = ({ data, order, ket, ...rest }) => {
	// const Tabel = ({ col, row }) => {
	// console.log(data.rows);
	// console.log({ ...rest });
	return (
		// <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={data} sorting={false} />
		// <MDBDataTableV5 hover data={data} searching={false} striped bordered small />
		<MDBDataTable responsive hover striped bordered small data={data} order={[order, ket]} className="tes-t" {...rest} />
		// <MDBTable striped responsive bordered sorting="true">
		// 	<MDBTableHead columns={col} cola />
		// 	<MDBTableBody rows={row} />
		// </MDBTable>
		// <MDBTable striped responsive>
		// 	<MDBTableHead color="primary-color" textWhite>
		// 		<tr>
		// 			<th>#</th>
		// 			<th>First</th>
		// 			<th>Last</th>
		// 			<th>Handle</th>
		// 		</tr>
		// 	</MDBTableHead>
		// 	<MDBTableBody>
		// 		<tr>
		// 			<td>1</td>
		// 			<td>Mark</td>
		// 			<td>Otto</td>
		// 			<td>@mdo</td>
		// 		</tr>
		// 		<tr>
		// 			<td>2</td>
		// 			<td>Jacob</td>
		// 			<td>Thornton</td>
		// 			<td>@fat</td>
		// 		</tr>
		// 		<tr>
		// 			<td>3</td>
		// 			<td>Larry</td>
		// 			<td>the Bird</td>
		// 			<td>@twitter</td>
		// 		</tr>
		// 	</MDBTableBody>
		// </MDBTable>
	);
};

export default Tabel;
