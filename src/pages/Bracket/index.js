import React, { useEffect, Fragment } from "react";
import { Card } from "../../components";

const Bracket = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Bracket`;
	});

	return (
		<Fragment>
			<p>Halaman Bracket</p>
			{/* <Card detail="tess" /> */}
		</Fragment>
	);
};

export default Bracket;
