import React, { useEffect, Fragment } from "react";
import { MDBDataTable } from "mdbreact";
import { dataa, data } from "./data";
import { Tabel2 } from "../../components";

const Teams = () => {
	useEffect(() => {
		document.title = `Teams`;
	});
	console.log(data);

	return (
		<Fragment>
			<p className="pt-3">Halaman Teams</p>
			<hr />
			<Tabel2 data={data} order="name" ket="asc" />
			{/* <MDBDataTable striped bordered small data={dataa} />; */}
		</Fragment>
	);
};

export default Teams;
