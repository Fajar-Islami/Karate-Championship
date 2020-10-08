import React, { useEffect, Fragment, useContext, useState } from "react";
import { Card } from "../../components";
import { DummyContext } from "../../context/dummyContext";
import Axios from "axios";
import { API_URL } from "../../config";

const Dummy = () => {
  // const { datas } = useContext(DummyContext);

  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Dummy`;
    getUser();
  }, []);

  const [data, setData] = useState([]);

  const getUser = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // 	.then((response) => response.json())
    // 	.then((json) => setData(json));
    Axios.get("http://www.omdbapi.com/?apikey=36a49aae&s=avenger").then((res) =>
      // console.log(res.data),
      setData(res.data),
    );
  };

  console.log(data);
  console.log(data.Search);

  return (
    <Fragment>
      <h3 className="pt-3">Halaman Dummy</h3>
      <hr />
      {/* {data.map((item) => {
				// return <Card datas={item} key={item.id} />;
				// return (
				// 	<p key={item.id}>
				// 		{" "}
				// 		{item.id}-{item.title}{" "}
				// 	</p>
				// );
			})} */}
      {/* <Card title="title" desc="desc" />; */}
    </Fragment>
  );
};

export default Dummy;
