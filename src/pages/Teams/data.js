import { MDBBtn } from "mdbreact";

import React from "react";

// const data = () => {
// 	const isi = {
// 		columns: [
// 			{
// 				label: "#",
// 				field: "id",
// 				sort: "asc",
// 			},
// 			{
// 				label: "First",
// 				field: "first",
// 				sort: "asc",
// 			},
// 			{
// 				label: "Last",
// 				field: "last",
// 				sort: "asc",
// 			},
// 			{
// 				label: "Handle",
// 				field: "handle",
// 				sort: "asc",
// 				width: 1000,
// 			},
// 		],
// 		rows: [
// 			{
// 				id: 1,
// 				first: (
// 					<MDBBtn color="purple" outline size="sm">
// 						Button
// 					</MDBBtn>
// 				),
// 				last: "Otto",
// 				handle: [<i key="cell3" className="fa fa-book mr-2 grey-text" aria-hidden="true"></i>, "Cell3"],
// 			},
// 			{
// 				id: 2,
// 				first: "Jacob",
// 				last: (
// 					<MDBBtn color="purple" outline size="sm">
// 						Button
// 					</MDBBtn>
// 				),
// 				handle: "@fat",
// 			},
// 			{
// 				id: 3,
// 				first: "Larry",
// 				last: "the Bird",
// 				handle: (
// 					<MDBBtn color="purple" outline size="sm">
// 						Button
// 					</MDBBtn>
// 				),
// 			},
// 		],
// 	};

// 	return isi;
// };

// const dataa = data();

// export { dataa };

const data = {
	columns: [
		{
			label: "No",
			field: "no",
			width: 150,
			sort: "disabled",
			attributes: {
				"aria-controls": "DataTable",
				"aria-label": "No",
			},
		},
		{
			label: "Flag",
			field: "flag",
			width: 270,
			sort: "disabled",
		},
		{
			label: "Contingent",
			field: "contingent",
			width: 270,
			sort: "disabled",
		},
		{
			label: "Male Entries",
			field: "MaleE",
			width: 200,
			sort: "disabled",
		},
		{
			label: "Female Entries",
			field: "FemaleE",
			sort: "disabled",
			width: 100,
		},
		{
			label: "Total Entries",
			field: "TotalE",
			sort: "disabled",
			width: 150,
		},
		{
			label: "Total Athletes",
			field: "TotalA",
			sort: "disabled",
			width: 100,
		},
	],
	rows: [
		{
			no: "1",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: (
				<MDBBtn color="purple" size="sm">
					Button
				</MDBBtn>
			),
		},
		{
			no: "2",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "3",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "4",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "5",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "1",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "2",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "3",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "4",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
		{
			no: "5",
			flag: <img src="" alt="bendera" />,
			contingent: <a href="/#">Jakarta</a>,
			MaleE: "48",
			FemaleE: "18",
			TotalE: "66",
			TotalA: "48",
		},
	],
};
export { data };
