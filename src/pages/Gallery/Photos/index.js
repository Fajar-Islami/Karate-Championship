import React, { useState, useEffect } from "react";

const Photos = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Photos`;
	});
	return (
		<div>
			<p>Halaman Photo</p>
		</div>
	);
};

export default Photos;
