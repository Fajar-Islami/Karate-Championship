import { Aceh, Bali, Banten, Bengkulu, Jakarta, JawaBarat, JawaTengah, JawaTimur, KalimantanBarat, KalimantanSelatan, KalimantanUtara, KalimantanTengah, KalimantanTimur, KepulauanBangkaBelitung, KepulauanRiau, Lampung, Maluku, MalukuUtara, NusaTenggaraBarat, PapuaBarat, Riau, SulawesiSelatan, SulawesiTenggara, SulawesiUtara, SumateraBarat, SumateraSelatan, SumateraUtara, Yogyakarta } from "../../assets/index";

const dataTeams = {
	columns: [
		{
			label: "No",
			field: "no",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Flag",
			field: "flag",
			sort: "asc",
			width: "5%",
			textAlign: "center",
		},
		{
			label: "Contingent",
			field: "contingent",
			sort: "asc",
			width: "50%",
			textAlign: "left",
			pl: "pl-3",
		},
		{
			label: "Male Entries",
			field: "maleE",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Female Entries",
			field: "femaleE",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Total Entries",
			field: "totalE",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
		{
			label: "Total Athletes",
			field: "totalA",
			sort: "asc",
			width: "10%",
			textAlign: "center",
		},
	],
	rows: [
		{
			no: "1",
			flag: Jakarta,
			contingent: "Jakarta",
			maleE: "48",
			femaleE: "18",
			totalA: "48",
		},
		{
			no: "2",
			flag: KalimantanSelatan,
			contingent: "KALIMANTAN SELATAN",
			maleE: "32",
			femaleE: "19",
			totalA: "38",
		},
		{
			no: "3",
			flag: Lampung,
			contingent: "LAMPUNG",
			maleE: "23",
			femaleE: "24",
			totalA: "38",
		},
		{
			no: "4",
			flag: SulawesiSelatan,
			contingent: "SULAWESI SELATAN",
			maleE: "28",
			femaleE: "19",
			totalA: "37",
		},
		{
			no: "5",
			flag: JawaBarat,
			contingent: "JAWA BARAT B",
			maleE: "26",
			femaleE: "14",
			totalA: "33",
		},
		{
			no: "6",
			flag: JawaTengah,
			contingent: "JAWA TENGAH",
			maleE: "18",
			femaleE: "24",
			totalA: "30",
		},
		{
			no: "7",
			flag: JawaTimur,
			contingent: "JAWA TIMUR",
			maleE: "25",
			femaleE: "17",
			totalA: "30",
		},
		{
			no: "8",
			flag: JawaBarat,
			contingent: "JAWA BARAT A",
			maleE: "21",
			femaleE: "17",
			totalA: "28",
		},
		{
			no: "9",
			flag: SumateraSelatan,
			contingent: "SUMATERA SELATAN",
			maleE: "24",
			femaleE: "19",
			totalA: "27",
		},
		{
			no: "10",
			flag: SumateraBarat,
			contingent: "SUMATERA BARAT",
			maleE: "20",
			femaleE: "17",
			totalA: "27",
		},
		{
			no: "11",
			flag: Bali,
			contingent: "BALI 1",
			maleE: "19",
			femaleE: "18",
			totalA: "25",
		},
		{
			no: "12",
			flag: JawaBarat,
			contingent: "JAWA BARAT C",
			maleE: "15",
			femaleE: "6",
			totalA: "20",
		},
		{
			no: "13",
			flag: Banten,
			contingent: "BANTEN",
			maleE: "14",
			femaleE: "15",
			totalA: "18",
		},
		{
			no: "14",
			flag: KalimantanBarat,
			contingent: "KALIMANTAN BARAT",
			maleE: "19",
			femaleE: "1",
			totalA: "14",
		},
		{
			no: "15",
			flag: Bengkulu,
			contingent: "BENGKULU I",
			maleE: "9",
			femaleE: "12",
			totalA: "13",
		},
		{
			no: "16",
			flag: SulawesiTenggara,
			contingent: "SULAWESI TENGGARA",
			maleE: "12",
			femaleE: "5",
			totalA: "12",
		},
		{
			no: "17",
			flag: SumateraUtara,
			contingent: "SUMATERA UTARA",
			maleE: "12",
			femaleE: "1",
			totalA: "11",
		},
		{
			no: "18",
			flag: KalimantanTengah,
			contingent: "KALIMANTAN TENGAH",
			maleE: "8",
			femaleE: "5",
			totalA: "10",
		},
		{
			no: "19",
			flag: NusaTenggaraBarat,
			contingent: "NUSA TENGGARA BARAT",
			maleE: "8",
			femaleE: "4",
			totalA: "9",
		},
		{
			no: "20",
			flag: Aceh,
			contingent: "ACEH",
			maleE: "7",
			femaleE: "5",
			totalA: "9",
		},
		{
			no: "21",
			flag: Maluku,
			contingent: "MALUKU",
			maleE: "5",
			femaleE: "2",
			totalA: "7",
		},
		{
			no: "22",
			flag: KalimantanTimur,
			contingent: "KALIMANTAN TIMUR",
			maleE: "1",
			femaleE: "7",
			totalA: "7",
		},
		{
			no: "23",
			flag: Yogyakarta,
			contingent: "YOGYAKARTA B",
			maleE: "8",
			femaleE: "0",
			totalA: "6",
		},
		{
			no: "24",
			flag: JawaTimur,
			contingent: "JAWA TIMUR I",
			maleE: "5",
			femaleE: "0",
			totalA: "5",
		},
		{
			no: "25",
			flag: Yogyakarta,
			contingent: "YOGYAKARTA",
			maleE: "4",
			femaleE: "6",
			totalA: "5",
		},
		{
			no: "26",
			flag: Banten,
			contingent: "BANTEN I",
			maleE: "4",
			femaleE: "6",
			totalA: "4",
		},
		{
			no: "27",
			flag: MalukuUtara,
			contingent: "MALUKU UTARA",
			maleE: "4",
			femaleE: "2",
			totalA: "4",
		},
		{
			no: "28",
			flag: Riau,
			contingent: "RIAU",
			maleE: "4",
			femaleE: "0",
			totalA: "3",
		},
		{
			no: "29",
			flag: KepulauanBangkaBelitung,
			contingent: "KEPULAUAN BANGKA BELITUNG",
			maleE: "2",
			femaleE: "3",
			totalA: "3",
		},
		{
			no: "30",
			flag: Bali,
			contingent: "BALI II",
			maleE: "0",
			femaleE: "8",
			totalA: "3",
		},
		{
			no: "31",
			flag: SumateraSelatan,
			contingent: "SUMATERA SELATAN",
			maleE: "0",
			femaleE: "6",
			totalA: "3",
		},
		{
			no: "32",
			flag: Bali,
			contingent: "BALI III",
			maleE: "0",
			femaleE: "3",
			totalA: "2",
		},
		{
			no: "33",
			flag: SulawesiSelatan,
			contingent: "SULAWESI SELATAN I",
			maleE: "6",
			femaleE: "0",
			totalA: "2",
		},
		{
			no: "34",
			flag: SumateraBarat,
			contingent: "SUMATERA BARAT I",
			maleE: "1",
			femaleE: "2",
			totalA: "2",
		},
		{
			no: "35",
			flag: Banten,
			contingent: "BANTEN II",
			maleE: "0",
			femaleE: "4",
			totalA: "2",
		},
		{
			no: "36",
			flag: SulawesiUtara,
			contingent: "SULAWESI UTARA",
			maleE: "1",
			femaleE: "1",
			totalA: "2",
		},
		{
			no: "37",
			flag: Bali,
			contingent: "BALI IV",
			maleE: "0",
			femaleE: "1",
			totalA: "1",
		},
		{
			no: "38",
			flag: KalimantanUtara,
			contingent: "KALIMANTAN UTARA I",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "39",
			flag: KalimantanSelatan,
			contingent: "KALIMANTAN SELATAN",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "40",
			flag: SumateraUtara,
			contingent: "SUMATERA UTARA",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "41",
			flag: KepulauanRiau,
			contingent: "LEMKARI KEPRI",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "42",
			flag: KalimantanTengah,
			contingent: "KALIMANTAN TENGAH I",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "43",
			flag: PapuaBarat,
			contingent: "PAPUA BARAT",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "44",
			flag: KalimantanTimur,
			contingent: "KALIMATAN TIMUR 1",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
		{
			no: "45",
			flag: Riau,
			contingent: "RIAU I",
			maleE: "0",
			femaleE: "0",
			totalA: "0",
		},
	],
};

export { dataTeams };
