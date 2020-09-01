import React, { useState, useEffect } from "react";

const SchedulesResult = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Schedules & Result`;
	});
	return (
		<div>
			<p>Halaman Schedules dan Result</p>
		</div>
	);
};

export default SchedulesResult;
