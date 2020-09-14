import React, { useEffect, Fragment } from "react";
import { Dropdown, Tabel, TabelBracket } from "../../components";
import { MDBTable, MDBTableBody, MDBBtn, MDBCol, MDBRow, MDBBadge } from "mdbreact";

const Bracket = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Bracket`;
	});

	const Badge = (teks, warna) => {
		return <MDBBadge color={warna}>{teks}</MDBBadge>;
	};

	return (
		<Fragment>
			<MDBRow>
				<MDBCol className="mb-5">
					<h3 className="pt-3">Halaman Bracket</h3>
					<hr />
					<form>
						<MDBTable borderless>
							<MDBTableBody>
								<Dropdown label="Age Categories" selected="--ALL--" option={["Usia Dini", "Pra Pemula", "Pemula", "Cadet", "Junior", "Senior", "Under 21", "Veteran"]} />
								<Dropdown label="Gender" selected="--ALL--" option={["Male", "Female"]} />
								<Dropdown label="Categories" selected="--ALL--" option={["KATA", "KUMITE"]} />
								<Dropdown label="Class Categories" selected="--ALL--" />

								<tr>
									<td className="font-weight-normal">Athlete Name</td>
									<td>:</td>
									<td className=" pt-2">
										<input type="text" className="form-control" placeholder="Enter athlete name" />
									</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td className="pl-1 pt-0">
										<MDBBtn color="primary">Search</MDBBtn>
									</td>
								</tr>
							</MDBTableBody>
						</MDBTable>
					</form>

					<h3>Usia Dini</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Final", "Kumite Individual Female -25kg Final", "Kumite Individual Female +25kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Pria Pemula</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kata Individual Male Pool 1/2", "Kata Individual Male Pool 2/2", "Kata Team Male Final", "Kumite Individual Male -35 KG Final", "Kumite Individual Male -35 KG Pool 1/2", "Kumite Individual Male -35 KG Pool 2/2", "Kumite Individual Male -40 KG Final", "", "Kumite Individual Male +40 KG Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Final", "Kata Individual Female Pool 1/2", "Kata Individual Female Pool 2/2", "Kata Team Female Final", "Kumite Individual Female -30 KG Final", "Kumite Individual Female -35 KG Final", "Kumite Individual Female +35 KG Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match On Tatami 2", "green")]} />
						</MDBCol>
					</MDBRow>

					<h3>Pemula</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kata Individual Male Pool 1/2", "Kata Individual Male Pool 2/2", "Kata Team Male Final", "Kumite Individual Male -45 KG Final", "Kumite Individual Male -55 KG Final", "Kumite Individual Male +55 KG Final", "Kumite Individual Male -50 KG Final", "", "Kumite Individual Male -40 KG Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Final", "Kata Individual Female Pool 1/2", "Kata Individual Female Pool 2/2", "Kumite Individual Female -42 KG Final", "Kumite Individual Female -47 KG Final", "Kumite Individual Female +47 KG Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Cadet</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Repechage", "Kata Individual Male Repechage", "Kumite Individual Male -52 KG Final", "Kumite Individual Male -52 KG Repechage", "Kumite Individual Male -52 KG Pool 1/2", "Kumite Individual Male -52 KG Pool 2/2", "Kumite Individual Male -57 KG Final", "Kumite Individual Male -63 KG Final", "Kumite Individual Male -70 KG Final", "Kumite Individual Male +70 KG Final", "Kumite Individual Male Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Repechage", "Kata Individual Female Repechage", "Kumite Individual Female -47 KG Final", "Kumite Individual Female -47 KG Repechage", "Kumite Individual Female -54 KG Final", "Kumite Individual Female -54 KG Repechage", "Kumite Individual Female -54 KG Final", "Kumite Individual Female +54 KG Repechage", "Kumite Individual Female Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Junior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket
								kolom={["Male", "Status"]}
								baris={["Kata Individual Male Repechage", "Kata Individual Male Repechage", "Kata Team Male Repechage", "Kata Team Male Repechage", "Kumite Individual Male -55 KG Final", "Kumite Individual Male -55 KG Repechage", "Kumite Individual Male -55 KG Pool 1/2", "Kumite Individual Male -55 KG Pool 2/2", "Kumite Individual Male -61 KG Final", "Kumite Individual Male -61 KG Repechage", "Kumite Individual Male -68 KG Final", "Kumite Individual Male -68 KG Repechage", "Kumite Individual Male -68 KG Pool 1/2", "Kumite Individual Male -68 KG Pool 2/2", "Kumite Individual Male -76 KG Final", "Kumite Individual Male -76 KG Repechage", "Kumite Individual Male +76 KG Final", "Kumite Individual Male Best of The Best Final"]}
								isiKolom1={[Badge("", ""), Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match on Tatami 3", "green"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]}
							/>
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Repechage", "Kata Individual Female Repechage", "Kata Team Female Repechage", "Kumite Individual Female -48 KG Final", "Kumite Individual Female -48 KG Repechage", "Kumite Individual Female -53 KG Final", "Kumite Individual Female -53 KG Repechage", "Kumite Individual Female -59 KG Final", "Kumite Individual Female -59 KG Repechage", "Kumite Individual Female +59 KG Final", "Kumite Individual Female +59 KG Repechage", "Kumite Individual Female Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Senior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Repechage", "Kata Individual Male Repechage", "Kata Team Male Repechage", "Kumite Individual Male -60 KG Final", "Kumite Individual Male -60 KG Repechage", "Kumite Individual Male -67 KG Final", "Kumite Individual Male -67 KG Repechage", "Kumite Individual Male -75 KG Final", "Kumite Individual Male -84 KG Final", "Kumite Individual Male +84 KG Final", "Kumite Individual Male Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Repechage", "Kata Individual Female Repechage", "Kata Team Female Repechage", "Kumite Individual Female -50 KG Final", "Kumite Individual Female -50 KG Repechage", "Kumite Individual Female -55 KG Final", "Kumite Individual Female -61 KG Final", "Kumite Individual Female -61 KG Repechage", "Kumite Individual Female -68 KG Final", "Kumite Individual Female Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Under 21</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Repechage", "Kata Individual Male Repechage", "Kumite Individual Male -60 KG Final", "Kumite Individual Male -67 KG Final", "Kumite Individual Male -75 KG Final", "Kumite Individual Male +84 KG Final", "Kumite Individual Male +84 KG Repechage", "Kumite Individual Male Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Repechage", "Kata Individual Female Repechage", "Kumite Individual Female -50 KG Final", "Kumite Individual Female -55 KG Final", "Kumite Individual Female -61 KG Final", "Kumite Individual Female -68 KG Final", "Kumite Individual Female Best of The Best Final"]} isiKolom1={[Badge("", ""), Badge("", ""), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</Fragment>
	);
};

export default Bracket;
