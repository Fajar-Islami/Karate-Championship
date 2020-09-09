import React, { useEffect, Fragment } from "react";
import { Tabel } from "../../components";

const Categories = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Categories`;
	});
	return (
		<Fragment>
			<h1 className="pt-3"> Halaman Kategori</h1>
			<hr />
			<h4>AA</h4>
			<Tabel />
			<br />
			<h4>BB</h4>
			<Tabel />
			<br />
		</Fragment>
	);
};

export default Categories;
