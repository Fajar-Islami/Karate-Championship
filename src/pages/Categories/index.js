import React, { useEffect, Fragment } from "react";
import { Tabel } from "../../components";
import { MDBDataTable } from "mdbreact";
import { data, usiadini } from "./data";

const Categories = () => {
	console.log(usiadini);
	console.log(usiadini.columns);

	const kolom = usiadini.columns;
	const baris = usiadini.rows;
	const kolom2 = data.columns;
	const baris2 = data.rows;

	// Lifecycle React Hooks
	useEffect(
		() => {
			document.title = `Categories`;
		},
		[kolom, baris],
		[kolom2, baris2],
	);

	return (
		<Fragment>
			<p className="pt-3">Categories</p>
			<hr />
			<Tabel striped bordered small data={usiadini} />;{/* <MDBDataTable striped bordered small data={usiadini} order={[order, ket]}/>; */}
			{/* <MDBDataTable striped bordered small data={usiadini} />; */}
			{/* <MDBDataTable striped bordered small data={data} />; */}
		</Fragment>
	);
};

export default Categories;
