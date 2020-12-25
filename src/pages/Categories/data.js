// import React from "react";
// import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const usiadini = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "disabled",
			width: "5%",
			textAlign: "center",
			// attributes: {
			// "aria-controls": "DataTable",
			// "aria-label": "Name",
			// className: " col-5",
			// },
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "disabled",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "disabled",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "disabled",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: 10,
			teams: "0",
		},
		{
			no: "2",
			entry: "KATA TEAM MALE",
			individuals: 2,
			teams: 1,
		},
		{
			no: "3",
			entry: "KUMITE -30 KG MALE",
			individuals: 13,
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE +30 KG MALE",
			individuals: 7,
			teams: "0",
		},
		{
			no: "5",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: 8,
			teams: "0",
		},
		{
			no: "6",
			entry: "KATA TEAM FEMALE",
			individuals: 0,
			teams: "0",
		},
		{
			no: "7",
			entry: "KUMITE -25 KG FEMALE",
			individuals: 4,
			teams: "0",
		},
		{
			no: "8",
			entry: "KUMITE +25 KG FEMALE",
			individuals: 6,
			teams: "0",
		},
	],
};

const prapemula = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "27",
			teams: "0",
		},
		{
			no: "2",
			entry: "KATA TEAM MALE",
			individuals: "6",
			teams: "3",
		},
		{
			no: "3",
			entry: "KUMITE -35 KG MALE",
			individuals: "27",
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE -40 KG MALE",
			individuals: "10",
			teams: "0",
		},
		{
			no: "5",
			entry: "KUMITE +40 KG MALE",
			individuals: "8",
			teams: "0",
		},
		{
			no: "6",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "28",
			teams: "0",
		},
		{
			no: "7",
			entry: "KATA TEAM FEMALE",
			individuals: "4",
			teams: "2",
		},
		{
			no: "8",
			entry: "KUMITE -30 KG FEMALE",
			individuals: "10",
			teams: "0",
		},
		{
			no: "9",
			entry: "KUMITE -35 KG FEMALE",
			individuals: "14",
			teams: "0",
		},
		{
			no: "10",
			entry: "KUMITE +35 KG FEMALE",
			individuals: "7",
			teams: "0",
		},
	],
};

const cadet = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "20",
			teams: "0",
		},
		{
			no: "2",
			entry: "KUMITE -52 KG MALE",
			individuals: "26",
			teams: "0",
		},
		{
			no: "3",
			entry: "KUMITE -57 KG MALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE -63 KG MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "5",
			entry: "KUMITE -70 KG MALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "6",
			entry: "KUMITE +50 KG MALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "7",
			entry: "KUMITE BEST OF THE BEST MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "8",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "20",
			teams: "0",
		},
		{
			no: "9",
			entry: "KUMITE -47 KG FEMALE",
			individuals: "16",
			teams: "0",
		},
		{
			no: "10",
			entry: "KUMITE -54 KG FEMALE",
			individuals: "10",
			teams: "0",
		},
		{
			no: "11",
			entry: "KUMITE +54 KG FEMALE",
			individuals: "12",
			teams: "0",
		},
		{
			no: "12",
			entry: "KUMITE BEST OF THE BEST FEMALE",
			individuals: "3",
			teams: "0",
		},
	],
};

const pemula = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "23",
			teams: "0",
		},
		{
			no: "2",
			entry: "KATA TEAM MALE",
			individuals: "13",
			teams: "6",
		},
		{
			no: "3",
			entry: "KUMITE -45 KG MALE",
			individuals: "12",
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE -55 KG MALE",
			individuals: "8",
			teams: "0",
		},
		{
			no: "5",
			entry: "KUMITE +55 KG MALE",
			individuals: "8",
			teams: "0",
		},
		{
			no: "6",
			entry: "KUMITE -50 KG MALE",
			individuals: "7",
			teams: "0",
		},
		{
			no: "7",
			entry: "KUMITE -40 KG MALE",
			individuals: "11",
			teams: "0",
		},
		{
			no: "8",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "18",
			teams: "0",
		},
		{
			no: "9",
			entry: "KATA TEAM FEMALE",
			individuals: "3",
			teams: "1",
		},
		{
			no: "10",
			entry: "KUMITE -42 KG FEMALE",
			individuals: "16",
			teams: "0",
		},
		{
			no: "11",
			entry: "KUMITE -47 KG FEMALE",
			individuals: "7",
			teams: "0",
		},
		{
			no: "12",
			entry: "KUMITE +37 KG FEMALE",
			individuals: "8",
			teams: "0",
		},
	],
};

const junior = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "18",
			teams: "0",
		},
		{
			no: "2",
			entry: "KATA TEAM MALE",
			individuals: "16",
			teams: "6",
		},
		{
			no: "3",
			entry: "KUMITE -55 KG MALE",
			individuals: "17",
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE -61 KG MALE",
			individuals: "15",
			teams: "0",
		},
		{
			no: "5",
			entry: "KUMITE -68 KG MALE",
			individuals: "17",
			teams: "0",
		},
		{
			no: "6",
			entry: "KUMITE -76 KG MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "7",
			entry: "KUMITE +76 KG MALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "8",
			entry: "KUMITE BEST OF THE BEST MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "9",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "10",
			teams: "0",
		},
		{
			no: "10",
			entry: "KATA TEAM FEMALE",
			individuals: "9",
			teams: "4",
		},
		{
			no: "11",
			entry: "KUMITE -48 KG FEMALE",
			individuals: "13",
			teams: "0",
		},
		{
			no: "12",
			entry: "KUMITE -53 KG FEMALE",
			individuals: "9",
			teams: "0",
		},
		{
			no: "13",
			entry: "KUMITE -59 KG FEMALE",
			individuals: "7",
			teams: "0",
		},
		{
			no: "14",
			entry: "KUMITE +59 KG FEMALE",
			individuals: "6",
			teams: "0",
		},
		{
			no: "15",
			entry: "KUMITE -BEST OF THE BEST FEMALE",
			individuals: "4",
			teams: "0",
		},
	],
};

const senior = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "10",
			teams: "0",
		},
		{
			no: "2",
			entry: "KATA TEAM MALE",
			individuals: "7",
			teams: "3",
		},
		{
			no: "3",
			entry: "KUMITE -60 KG MALE",
			individuals: "6",
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE -67 KG MALE",
			individuals: "6",
			teams: "0",
		},
		{
			no: "5",
			entry: "KUMITE -75 KG MALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "6",
			entry: "KUMITE -84 KG MALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "7",
			entry: "KUMITE +84 KG MALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "8",
			entry: "KUMITE BEST OF THE BEST MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "9",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "10",
			entry: "KATA TEAM FEMALE",
			individuals: "5",
			teams: "2",
		},
		{
			no: "11",
			entry: "KUMITE -50 KG FEMALE",
			individuals: "7",
			teams: "0",
		},
		{
			no: "12",
			entry: "KUMITE -55 KG FEMALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "13",
			entry: "KUMITE -61 KG FEMALE",
			individuals: "6",
			teams: "0",
		},
		{
			no: "14",
			entry: "KUMITE -68 KG FEMALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "15",
			entry: "KUMITE +68 KG FEMALE",
			individuals: 0,
			teams: "0",
		},
		{
			no: "16",
			entry: "KUMITE -BEST OF THE BEST FEMALE",
			individuals: "4",
			teams: "0",
		},
	],
};

const under21 = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "2",
			entry: "KUMITE -60 KG MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "3",
			entry: "KUMITE -67 KG MALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "4",
			entry: "KUMITE -75 KG MALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "5",
			entry: "KUMITE -84 KG MALE",
			individuals: 0,
			teams: "0",
		},
		{
			no: "6",
			entry: "KUMITE +84 KG MALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "7",
			entry: "KUMITE -68 KG MALE",
			individuals: 0,
			teams: "0",
		},
		{
			no: "8",
			entry: "KUMITE BEST OF THE BEST MALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "9",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "5",
			teams: "0",
		},
		{
			no: "10",
			entry: "KUMITE -50 KG FEMALE",
			individuals: "4",
			teams: "0",
		},
		{
			no: "11",
			entry: "KUMITE -55 KG FEMALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "12",
			entry: "KUMITE -61 KG FEMALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "13",
			entry: "KUMITE -68 KG FEMALE",
			individuals: "3",
			teams: "0",
		},
		{
			no: "14",
			entry: "KUMITE +68 KG FEMALE",
			individuals: 0,
			teams: "0",
		},
		{
			no: "15",
			entry: "KUMITE -BEST OF THE BEST FEMALE",
			individuals: "4",
			teams: "0",
		},
	],
};

const veteran = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Entries per Category",
			field: "entry",
			sort: "asc",
			width: "75%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Individuals",
			field: "individuals",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Teams",
			field: "teams",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			entry: "KATA INDIVIDUAL MALE",
			individuals: "8",
			teams: "0",
		},
		{
			no: "2",
			entry: "KATA INDIVIDUAL FEMALE",
			individuals: "2",
			teams: "0",
		},
	],
};

export { usiadini, prapemula, cadet, pemula, junior, senior, under21, veteran };
