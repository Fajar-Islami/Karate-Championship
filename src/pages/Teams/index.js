import React, { useEffect, Fragment } from "react";
import { MDBDataTable } from "mdbreact";
import { dataa, data } from "./data";
import { Tabel2, Tabel } from "../../components";

const Teams = () => {
	useEffect(() => {
		document.title = `Teams`;
	});
	console.log(data);

	return (
		<Fragment>
			<p className="pt-3">Halaman Teams</p>
			<hr />
			<h4>Tabel 2 V</h4>
			<Tabel2 data={data} order="no" ket="asc" paging={false} bordered small />

			<hr />
			<h4>Tabel MDBDataTable </h4>
			<Tabel data={data} order="no" ket="asc" paging={false} bordered small />
			{/* <MDBDataTable striped bordered small data={dataa} />; */}
		</Fragment>
	);
};

export default Teams;
