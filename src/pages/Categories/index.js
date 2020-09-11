import React, { useEffect, Fragment } from "react";
import { Tabel } from "../../components";
import { MDBDataTable } from "mdbreact";
import { data } from "./data";

const Categories = () => {
	console.log(data);
	console.log(data.columns);

	const kolom = data.columns;
	const baris = data.rows;
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Categories`;
	}, [kolom, baris]);

	return (
			<Fragment>
				<p className="pt-3">Halaman Categories</p>
				<hr />
				<MDBDataTable striped bordered small data={data} />;
			</Fragment>
	);
};

export default Categories;
