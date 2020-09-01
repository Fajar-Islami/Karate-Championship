import React, { useState, useEffect } from "react";

const Home = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Home`;
	});

	return (
		<div>
			<p>Halaman Home</p>
		</div>
	);
};

export default Home;
