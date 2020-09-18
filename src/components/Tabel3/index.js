import React, { Fragment, useEffect, useState } from "react";
import { MDBTable, MDBTableBody, thead } from "mdbreact";

const Tabel3 = () => {
	const data = [
		{
			nama: "fajar",
			no: 1,
		},
		{
			nama: "fajar",
			no: 2,
		},
	];

	const [dataentries, setDataEntries] = useState([
		{
			nom: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: 10,
			teams: "",
		},
		{
			nom: "2",
			entry: "KATA TEAM MALE",
			individuals: 2,
			teams: "1",
		},
		{
			nom: "3",
			entry: "KUMITE -30 KG MALE",
			individuals: 13,
			teams: "",
		},
		{
			nom: "4",
			entry: "KUMITE +30 KG MALE",
			individuals: 7,
			teams: "",
		},
		{
			nom: "5",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: 8,
			teams: "",
		},
		{
			nom: "6",
			entry: "KATA TEAM FEMALE",
			individuals: 0,
			teams: "",
		},
		{
			nom: "7",
			entry: "KUMITE -25 KG FEMALE",
			individuals: 4,
			teams: "",
		},
		{
			nom: "8",
			entry: "KUMITE +25 KG FEMALE",
			individuals: 6,
			teams: "",
		},
	]);

	const [totalindividual, settotalindividual] = useState(0);
	const [totalteam, settotalteam] = useState(0);

	const hitungfooter = async () => {
		var individual = 0;
		var team = 0;
		await dataentries.map((item) => {
			individual = individual + item.individuals;
			team = team + item.teams;
		});
		settotalindividual(individual);
		settotalteam(team);
	};

	useEffect(() => {
		hitungfooter();
	}, []);
	// console.log(tes);
	// console.log(tes[0]);	const columns = tes[0] && Object.keys(tes[0]);

	return (
		<Fragment>
			<div>aaaa</div>
			<div>bbbb</div>
			<table className="col-12">
				<thead>
					<tr>
						<th>No</th>
						<th>Entry</th>
						<th>Individuals</th>
						<th>Teams</th>
					</tr>
				</thead>
				<tbody>
					{dataentries.map((data, i) => {
						return (
							<tr>
								<td>{i + 1}</td>
								<td>{data.entry}</td>
								<td>{data.individuals}</td>
								<td>{data.teams}</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="2">Totoal</td>
						<td>{totalindividual}</td>
						<td>{totalteam}</td>
					</tr>
				</tfoot>
			</table>
		</Fragment>
	);
};

export default Tabel3;
