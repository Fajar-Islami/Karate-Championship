import React, { createContext, useState, useReducer } from "react";
import { dummyReducer } from "../reducers/dummyReducer";

export const DummyContext = createContext();

const DummyContextProvider = (props) => {
	const [datas, dispatch] = useReducer(dummyReducer, [
		{ judul: "Judul 1", detail: "Detail 1", id: 1, isi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita illo maxime magnam. Asperiores ipsam suscipit quasi quaerat ducimus praesentium neque temporibus sed facere alias commodi quidem, incidunt quas odio." },
		{ judul: "Judul 2", detail: "Detail 2", id: 2, isi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita illo maxime magnam. Asperiores ipsam suscipit quasi quaerat ducimus praesentium neque temporibus sed facere alias commodi quidem, incidunt quas odio." },
	]);
	return <DummyContext.Provider value={{ datas, dispatch }}>{props.children}</DummyContext.Provider>;
};

export default DummyContextProvider;
