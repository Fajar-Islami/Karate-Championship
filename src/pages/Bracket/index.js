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
										<input type="text" className="form-control" placeholder="Masukan Nama Atlet" />
									</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td className="pl-1 pt-0">
										<MDBBtn color="primary">Cari</MDBBtn>
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
							<TabelBracket kolom={["Female", "Status"]} baris={["Kata Individual Female Final", "Kumite Individual Male -25kg Final", "Kumite Individual Male +25kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Pria Pemula</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Pemula</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Cadet</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Junior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Senior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Junior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>

					<h3>Under 21</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
						<MDBCol size="6">
							<TabelBracket kolom={["Male", "Status"]} baris={["Kata Individual Male Final", "Kumite Individual Male -30kg Final", "Kumite Individual Male +30kg Final"]} isiKolom1={[Badge("Match Over", "danger"), Badge("Match Over", "danger"), Badge("Match Over", "danger")]} />
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</Fragment>
	);
};

export default Bracket;
