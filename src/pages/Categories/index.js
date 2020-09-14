import React, { useEffect, Fragment } from "react";
import { Tabel } from "../../components";
import { MDBDataTableV5 } from "mdbreact";
import { usiaDini } from "./data";

const Categories = () => {
	console.log(usiaDini());
	console.log(usiaDini().columns);

	const kolom = usiaDini().columns;
	const baris = usiaDini().rows;
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Categories`;
	}, [kolom, baris]);

	return (
		<Fragment>
			<h1 className="pt-3"> Halaman Kategori</h1>
			<hr />
			<h4>Usia Dini</h4>
			<Tabel data={usiaDini()} paging={false} searching={false} />
			<br />
			<h4>Pra Pemula</h4>
			<br />
			{/* <Tabel col={kolom} row={baris} /> */}
			<br />
		</Fragment>
	);
};

export default Categories;
