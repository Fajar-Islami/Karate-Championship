import React, { useEffect, Fragment } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Teams = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Teams`;
	});

	return (
		<Fragment>
			<p>Halaman Tabel</p>
			<MDBTable striped>
				<MDBTableHead>
					<tr>
						<th>#</th>
						<th>First</th>
						<th>Last</th>
						<th>Handle</th>
					</tr>
				</MDBTableHead>
				<MDBTableBody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</MDBTableBody>
			</MDBTable>
		</Fragment>
	);
};

export default Teams;
