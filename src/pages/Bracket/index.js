import React, { useState, useEffect } from "react";

const Bracket = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Bracket`;
	});

	return (
		<div>
			<p>Halaman Bracket</p>
		</div>
	);
};

export default Bracket;
