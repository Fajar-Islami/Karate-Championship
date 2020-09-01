import React, { useState, useEffect } from "react";

const Video = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Video`;
	});
	return (
		<div>
			<p>Halaman Video</p>
		</div>
	);
};

export default Video;
