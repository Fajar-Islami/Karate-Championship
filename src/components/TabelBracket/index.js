import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBBadge } from "mdbreact";
import "./style.scss";

const TabelBracket = ({ data = [], ...rest }) => {
	const [dataMale, setDataMale] = useState(data.male);
	const [dataFemale, setDataFemale] = useState(data.female);

	// console.log(data);
	// console.log(Object.keys(data)[0]);

	const Badge = (text, statusType) => {
		return <MDBBadge color={statusType}>{text}</MDBBadge>;
	};

	return (
		<MDBRow>
			<MDBCol size="6">
				<MDBTable responsive className="tabel-tes">
					<MDBTableHead>
						<tr>
							<th style={{ width: "70%", textAlign: "center", verticalAlign: "middle" }}>Male</th>
							<th style={{ width: "30%", textAlign: "center", verticalAlign: "middle" }}>Status</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{dataMale.map((data, i) => {
							return (
								<tr key={i}>
									<td style={{ textAlign: "left" }}>{data.label}</td>
									<td style={{ textAlign: "center" }}> {Badge(data.status, data.statusType)} </td>
								</tr>
							);
						})}
					</MDBTableBody>
				</MDBTable>
			</MDBCol>
			<MDBCol size="6">
				<MDBTable responsive className="tabel-tes">
					<MDBTableHead>
						<tr>
							<th style={{ width: "70%", textAlign: "center", verticalAlign: "middle" }}>Female</th>
							<th style={{ width: "30%", textAlign: "center", verticalAlign: "middle" }}>Status</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{dataFemale.map((data, i) => {
							return (
								<tr key={i}>
									<td style={{ textAlign: "left" }}>{data.label}</td>
									<td style={{ textAlign: "center" }}> {Badge(data.status, data.statusType)} </td>
								</tr>
							);
						})}
					</MDBTableBody>
				</MDBTable>
			</MDBCol>
		</MDBRow>
	);
};

export default TabelBracket;
