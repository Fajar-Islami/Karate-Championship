import React, { createContext, useReducer } from 'react';
import { dummyReducer } from '../reducers/dummyReducer';
import axios from 'axios';

export const DummyContext = createContext();

const DummyContextProvider = (props) => {
  const [datas, dispatch] = useReducer(dummyReducer, [
    {
      judul: 'Judul 1',
      detail: 'Detail 1',
      id: 1,
      isi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita illo maxime magnam. Asperiores ipsam suscipit quasi quaerat ducimus praesentium neque temporibus sed facere alias commodi quidem, incidunt quas odio.',
    },
    {
      judul: 'Judul 2',
      detail: 'Detail 2',
      id: 2,
      isi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita illo maxime magnam. Asperiores ipsam suscipit quasi quaerat ducimus praesentium neque temporibus sed facere alias commodi quidem, incidunt quas odio.',
    },
  ]);
  // const [datas, setDatas] = useState([
  // 	axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  // 		console.log(res.data);
  // 	}),
  // ]);

  return (
    <DummyContext.Provider value={{ datas, dispatch }}>
      {props.children}
    </DummyContext.Provider>
  );
};

export default DummyContextProvider;
