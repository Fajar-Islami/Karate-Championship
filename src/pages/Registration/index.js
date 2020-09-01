import React, { useState, useEffect } from "react";

const Registration = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Registration`;
	});
	return (
		<div>
			<p>Halaman Registration</p>
		</div>
	);
};

export default Registration;
