import React, { useState, useEffect } from "react";

const Statistic = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Statistic`;
	});

	return (
		<div>
			<p>Halaman Statistic</p>
		</div>
	);
};

export default Statistic;
