import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Image } from "../index";

const TabelTeams = ({ data, alignText = "right", ...rest }) => {
	const [dataEntries, setDataEntries] = useState(data.rows);

	const [totalMale, setTotalMale] = useState(0);
	const [totalFemale, setTotalFemale] = useState(0);
	const [totalEntries, setTotalEntries] = useState(0);
	const [totalAthletes, setTotalAthletes] = useState(0);

	const angka = (tes) => {
		return parseInt(tes, 10);
	};

	const hitungfooter = async () => {
		let male = 0;
		let female = 0;
		let entries = 0;
		let athletes = 0;

		await dataEntries.map((item) => {
			male = angka(male) + angka(item.maleE);
			female = angka(female) + angka(item.femaleE);
			// entries = angka(entries) + angka(item.totalE);
			entries = male + female;
			athletes = angka(athletes) + angka(item.totalA);
		});
		setTotalMale(male);
		setTotalFemale(female);
		setTotalEntries(entries);
		setTotalAthletes(athletes);
	};

	useEffect(() => {
		hitungfooter();
	}, []);

	const column = data.columns;
	const row = data.rows;
	// console.log(row);
	console.log(dataEntries);
	return (
		<MDBTable responsive hover className="tabel-biru" {...rest}>
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
						<tr key={i}>
							<td style={{ textAlign: alignText[0] }}>{i + 1}</td>
							<td style={{ textAlign: alignText[1] }}>
								<Image image={data.flag} width="25px" height="25px" title={data.contingent} />
							</td>
							<td className="pl-3 " style={{ textAlign: alignText[2] }}>
								{data.contingent}
							</td>
							<td style={{ textAlign: alignText[3] }}>{data.maleE}</td>
							<td style={{ textAlign: alignText[4] }}>{data.femaleE}</td>
							<td style={{ textAlign: alignText[5] }}>{angka(data.femaleE) + angka(data.maleE)}</td>

							{/* <td style={{ textAlign: alignText[5] }}>{data.totalE}</td> */}
							<td style={{ textAlign: alignText[6] }}>{data.totalA}</td>
						</tr>
					);
				})}
			</MDBTableBody>

			<tfoot>
				<tr>
					<td style={{ textAlign: "center" }} colSpan="3">
						Total
					</td>
					<td style={{ textAlign: "center" }}>{totalMale}</td>
					<td style={{ textAlign: "center" }}>{totalFemale}</td>
					<td style={{ textAlign: "center" }}>{totalEntries}</td>
					<td style={{ textAlign: "center" }}>{totalAthletes}</td>
				</tr>
			</tfoot>
		</MDBTable>
	);
};

export default TabelTeams;
