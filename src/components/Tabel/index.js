import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
// import "./style.scss";

const Tabel = ({ data, alignText = "right", ...rest }) => {
	// console.log(data);
	// console.log(alignText);
	// console.log(alignText[1]);
	// console.log(rest);
	const [dataEntries, setDataEntries] = useState(data.rows);

	const [totalindividual, settotalindividual] = useState(0);
	const [totalteam, settotalteam] = useState(0);

	const angka = (tes) => {
		return parseInt(tes, 10);
	};

	const hitungfooter = async () => {
		var individual = 0;
		var team = 0;
		await dataEntries.map((item) => {
			individual = angka(individual) + angka(item.individuals);
			team = angka(team) + angka(item.teams);
		});
		settotalindividual(individual);
		settotalteam(team);
	};

	useEffect(() => {
		hitungfooter();
	}, []);

	const column = data.columns;
	const row = data.rows;
	console.log(row);

	return (
		// <MDBDataTable responsive hover data={data} className="tes-t" {...rest} />
		<MDBTable responsive hover className="tabel-k" {...rest}>
			{/* <MDBTableHead columns={data.columns} /> */}
			<MDBTableHead>
				<tr>
					{column.map((heading, i) => (
						// console.log(heading.label),
						<th key={i} className={heading.pl} style={{ width: heading.width, textAlign: heading.textAlign, verticalAlign: "middle" }}>
							{heading.label}
						</th>
					))}
				</tr>
			</MDBTableHead>
			{/* <MDBTableBody rows={data.rows} /> */}
			<MDBTableBody>
				{dataEntries.map((data, i) => {
					return (
						<tr>
							<td style={{ textAlign: alignText[0] }}>{i + 1}</td>
							<td className="pl-3" style={{ textAlign: alignText[1] }}>
								{data.entry}
							</td>
							<td style={{ textAlign: alignText[2] }}>{data.individuals}</td>
							<td style={{ textAlign: alignText[3] }}>{data.teams}</td>
						</tr>
					);
				})}
			</MDBTableBody>

			<tfoot>
				<tr>
					<td style={{ textAlign: "center" }} colSpan="2">
						Total
					</td>
					<td style={{ textAlign: "center" }}>{totalindividual}</td>
					<td style={{ textAlign: "center" }}>{totalteam}</td>
				</tr>
			</tfoot>
		</MDBTable>
	);
};

export default Tabel;
