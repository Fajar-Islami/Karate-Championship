import React, { useEffect, Fragment, useContext } from "react";
import { Card } from "../../components";
import { DummyContext } from "../../context/dummyContext";

const Dummy = () => {
	const { datas } = useContext(DummyContext);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Dummy`;
	});

	return (
		<Fragment>
			<p>Halaman Dummy</p>
			{datas.map((data) => {
				return <Card datas={data} key={data.id} />;
			})}
		</Fragment>
	);
};

export default Dummy;
