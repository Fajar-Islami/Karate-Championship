import React, { useEffect, Fragment } from "react";
import { MDBDataTable, MDBDataTableV5 } from "mdbreact";
import { dataa, data } from "./data";
import { Tabel2, Tabel, Tabel3 } from "../../components";

const Teams = () => {
	useEffect(() => {
		document.title = `Teams`;
	});
	console.log(dataa);
	console.log(dataa.columns);

	// OPsi
	// paging={false} bordered small striped  sorting={false}

	return (
		<Fragment>
			<p className="pt-3">Halaman Teams</p>
			<hr />
			<h4>Tabel 2 V</h4>
			{/* <Tabel2 data={dataa} /> */}
			<hr />
			<h4>Tabel MDBDataTable </h4>
			{/* <Tabel data={dataa} striped bordered small /> */}
			{/* <Tabel data={data} striped bordered small /> */}
			<MDBDataTable responsive hover striped bordered small data={dataa} />;
			<hr />
			<h4>Tabel Biasa </h4>
			<MDBDataTableV5 responsive hover striped bordered small data={dataa} />;
		</Fragment>
	);
};

export default Teams;
