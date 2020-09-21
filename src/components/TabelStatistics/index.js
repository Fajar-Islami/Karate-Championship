import React, { Fragment, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
const TabelStatistics = ({ data = [], tableTitle, ...rest }) => {
	const [dataEntries, setDataEntries] = useState(data);
	console.log(dataEntries);
	console.log(data);

	return (
		<Fragment>
			<h5 className="mt-3 text-primary font-weight-normal"> {tableTitle} </h5>

			{data.length > 0 ? (
				<MDBTable responsive hover className="tabel-biru" bordered {...rest}>
					{/* <MDBTableHead columns={data.columns} /> */}
					<MDBTableHead>
						<tr>
							<th style={{ width: "2%", textAlign: "center", verticalAlign: "middle" }}>No</th>
							<th style={{ width: "80%", textAlign: "left", verticalAlign: "middle" }}>Contestant</th>
							<th style={{ width: "5%", textAlign: "center", verticalAlign: "middle" }}>Win</th>
							<th style={{ width: "5%", textAlign: "center", verticalAlign: "middle" }}>Point</th>
							<th style={{ width: "5%", textAlign: "center", verticalAlign: "middle" }}>Total</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{dataEntries.map((data, i) => {
							return (
								<tr>
									<td style={{ textAlign: "center" }}>{i + 1}</td>
									<td className="pl-3" style={{ textAlign: "left" }}>
										{data.contestant}
									</td>
									<td style={{ textAlign: "center" }}>{data.win}</td>
									<td style={{ textAlign: "center" }}>{data.point}</td>
									<td style={{ textAlign: "center" }}>{data.win + data.point}</td>
								</tr>
							);
						})}
					</MDBTableBody>
				</MDBTable>
			) : (
				""
			)}
		</Fragment>
	);
};

export default TabelStatistics;
