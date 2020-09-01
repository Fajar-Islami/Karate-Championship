import React, { useState, useEffect } from "react";

const Categories = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Categories`;
	});
	return (
		<div>
			<p>Halaman Kategori</p>
		</div>
	);
};

export default Categories;
