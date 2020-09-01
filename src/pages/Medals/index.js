import React, { useState, useEffect } from "react";

const Medals = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Medal`;
	});

	return (
		<div>
			<p>Halaman Medals</p>
		</div>
	);
};

export default Medals;
