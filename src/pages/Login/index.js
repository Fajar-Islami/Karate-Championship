import React, { useState, useEffect } from "react";

const Login = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Login`;
	});

	return (
		<div>
			<p>Halaman Login</p>
		</div>
	);
};

export default Login;
