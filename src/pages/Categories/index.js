import React, { useEffect, Fragment } from "react";
import { Tabel, Tabel3 } from "../../components";
import { MDBDataTable } from "mdbreact";
import { usiadini, prapemula, cadet, pemula, junior, senior, under21, veteran } from "./data";
import "../../components/Tabel/style.scss";

const Categories = () => {
	// console.log(usiadini);
	// console.log(usiadini.columns);

	// const kolom = usiadini.columns;
	// const baris = usiadini.rows;
	// const kolom2 = data.columns;
	// const baris2 = data.rows;

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Categories`;
	}, []);

	return (
		<Fragment>
			<h3 className="pt-3">Categories</h3>
			<hr />
			<h4>Usia Dini</h4>
			<Tabel bordered small data={usiadini} alignText={["center", "left", "center", "center"]} />
			{/* <Tabel striped bordered small data={usiadini} /> */}
			<br />
			<h4>Pra Pemula</h4>
			<Tabel bordered small data={prapemula} alignText={["center", "left", "center", "center"]} />

			<br />
			<h4>Pemula</h4>
			<Tabel bordered small data={cadet} alignText={["center", "left", "center", "center"]} />

			<br />
			<h4>Cadet</h4>
			<Tabel bordered small data={pemula} alignText={["center", "left", "center", "center"]} />

			<br />
			<h4>Junior</h4>
			<Tabel bordered small data={junior} alignText={["center", "left", "center", "center"]} />

			<br />
			<h4>Senior</h4>
			<Tabel bordered small data={senior} alignText={["center", "left", "center", "center"]} />
			<br />
			<h4>Under 21</h4>
			<Tabel bordered small data={under21} alignText={["center", "left", "center", "center"]} />
			<br />
			<h4>Veteran</h4>
			<Tabel bordered small data={veteran} alignText={["center", "left", "center", "center"]} />

			{/* <hr /> */}
			{/* <Tabel3 data={usiadini} /> */}
			{/* <MDBDataTable striped bordered small data={usiadini} order={["no", "asc"]} />; */}
			{/* <MDBDataTable striped bordered small data={usiadini} />; */}
			{/* <MDBDataTable striped bordered small data={data} />; */}
		</Fragment>
	);
};

export default Categories;
