import React, { useEffect, Fragment, useContext, useState } from "react";
import { Card } from "../../components";
import { DummyContext } from "../../context/dummyContext";
import Axios from "axios";

const Dummy = () => {
	const { datas } = useContext(DummyContext);
	// const [datas, setDatas] = useState(initialState)

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Dummy`;
		// Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
		// 	console.log(res.data);
		// });
	});

	console.log(datas);

	return (
		<Fragment>
			<p>Halaman Dummy</p>
			{datas.map((data) => {
				return <Card datas={data} key={data.id} />;
			})}
			{/* <Card title="title" desc="desc" />; */}
		</Fragment>
	);
};

export default Dummy;
