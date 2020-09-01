import React, { useState, useEffect } from "react";

const Teams = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Teams`;
	});

	return (
		<div>
			<p>Halaman Teams</p>
		</div>
	);
};

export default Teams;
