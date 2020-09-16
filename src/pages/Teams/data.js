import { MDBBtn } from "mdbreact";

import React from "react";

const data1 = () => {
	const isi = {
		columns: [
			{
				label: "Name",
				field: "name",
				width: 150,
				attributes: {
					"aria-controls": "DataTable",
					"aria-label": "Name",
					className: "col-5",
				},
			},
			{
				label: "Position",
				field: "position",
				width: 270,
			},
			{
				label: "Office",
				field: "office",
				width: 200,
			},
			{
				label: "Age",
				field: "age",
				sort: "asc",
				width: 50,
			},
			{
				label: "Start date",
				field: "date",
				sort: "disabled",
				width: 2000,
			},
			{
				label: "Salary",
				field: "salary",
				sort: "disabled",
				width: 100,
			},
		],
		rows: [
			{
				name: "Tiger Nixon",
				position: "System Architect",
				office: "Edinburgh",
				age: "61",
				date: "2011/04/25",
				salary: "$320",
			},
			{
				name: "Garrett Winters",
				position: "Accountant",
				office: "Tokyo",
				age: "63",
				date: "2011/07/25",
				salary: "$170",
			},
			{
				name: "Ashton Cox",
				position: "Junior Technical Author",
				office: "San Francisco",
				age: "66",
				date: "2009/01/12",
				salary: "$86",
			},
			{
				name: "Cedric Kelly",
				position: "Senior Javascript Developer",
				office: "Edinburgh",
				age: "22",
				date: "2012/03/29",
				salary: "$433",
			},
			{
				name: "Airi Satou",
				position: "Accountant",
				office: "Tokyo",
				age: "33",
				date: "2008/11/28",
				salary: "$162",
			},
			{
				name: "Brielle Williamson",
				position: "Integration Specialist",
				office: "New York",
				age: "61",
				date: "2012/12/02",
				salary: "$372",
			},
			{
				name: "Herrod Chandler",
				position: "Sales Assistant",
				office: "San Francisco",
				age: "59",
				date: "2012/08/06",
				salary: "$137",
			},
		],
	};

	return isi;
};

const dataa = data1();

export { dataa };

// const data = {
// 	columns: [
// 		{
// 			label: "Name",
// 			field: "name",
// 			width: 150,
// 			attributes: {
// 				"aria-controls": "DataTable",
// 				"aria-label": "Name",
// 			},
// 		},
// 		{
// 			label: "Position",
// 			field: "position",
// 			width: 270,
// 		},
// 		{
// 			label: "Office",
// 			field: "office",
// 			width: 200,
// 		},
// 		{
// 			label: "Age",
// 			field: "age",
// 			sort: "asc",
// 			width: 50,
// 		},
// 		{
// 			label: "Start date",
// 			field: "date",
// 			sort: "disabled",
// 			width: 2000,
// 		},
// 		{
// 			label: "Salary",
// 			field: "salary",
// 			sort: "disabled",
// 			width: 100,
// 		},
// 	],
// 	rows: [
// 		{
// 			name: "Tiger Nixon",
// 			position: "System Architect",
// 			office: "Edinburgh",
// 			age: "61",
// 			date: "2011/04/25",
// 			salary: "$320",
// 		},
// 		{
// 			name: "Garrett Winters",
// 			position: "Accountant",
// 			office: "Tokyo",
// 			age: "63",
// 			date: "2011/07/25",
// 			salary: "$170",
// 		},
// 		{
// 			name: "Ashton Cox",
// 			position: "Junior Technical Author",
// 			office: "San Francisco",
// 			age: "66",
// 			date: "2009/01/12",
// 			salary: "$86",
// 		},
// 		{
// 			name: "Cedric Kelly",
// 			position: "Senior Javascript Developer",
// 			office: "Edinburgh",
// 			age: "22",
// 			date: "2012/03/29",
// 			salary: "$433",
// 		},
// 		{
// 			name: "Airi Satou",
// 			position: "Accountant",
// 			office: "Tokyo",
// 			age: "33",
// 			date: "2008/11/28",
// 			salary: "$162",
// 		},
// 		{
// 			name: "Brielle Williamson",
// 			position: "Integration Specialist",
// 			office: "New York",
// 			age: "61",
// 			date: "2012/12/02",
// 			salary: "$372",
// 		},
// 		{
// 			name: "Herrod Chandler",
// 			position: "Sales Assistant",
// 			office: "San Francisco",
// 			age: "59",
// 			date: "2012/08/06",
// 			salary: "$137",
// 		},
// 	],
// };
// export { data };
