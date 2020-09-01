import React, { useState, useEffect } from "react";

const Guidance = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Guidance`;
	});

	return (
		<div>
			<p>Halaman Guidance</p>
		</div>
	);
};

export default Guidance;
