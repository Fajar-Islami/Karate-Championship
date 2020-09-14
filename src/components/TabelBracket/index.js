import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./style.scss";

const TabelBracket = ({ kolom, baris, isiKolom1 = [], isiKolom2 = [], isiKolom3 = [] }) => {
	return (
		<MDBTable striped="primary" responsive className="tabel-tes">
			<MDBTableHead color="primary-color" textWhite>
				<tr>
					{kolom.map((item, i) => {
						return (
							<th key={i} className="text-center font-weight-bold">
								{item}
							</th>
						);
					})}
					{/* <th>#</th>
					<th>First</th>
					<th>Last</th>
					<th>Handle</th> */}
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{baris.map((item, i) => {
					const v = ` font-weight-normal col-${i}`;
					return (
						<tr key={i}>
							<td className={v}> {item}</td>
							{isiKolom1.length > 0 ? <td className="text-center font-weight-normal col-1"> {isiKolom1[i]}</td> : ""}
							{isiKolom2.length > 0 ? <td className="text-center font-weight-normal col-1"> {isiKolom2[i]}</td> : ""}
							{isiKolom3.length > 0 ? <td className="text-center font-weight-normal col-1"> {isiKolom3[i]}</td> : ""}
						</tr>
					);
				})}
				{/* <tr>
					<td>#</td>
					<td>First</td>
					<td>Last</td>
					<td>Handle</td>
				</tr>
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
				</tr> */}
			</MDBTableBody>
		</MDBTable>
	);
};

export default TabelBracket;
