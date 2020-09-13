import React, { useEffect, Fragment } from "react";
import { Card, Dropdown, Tabel } from "../../components";
import { MDBTable, MDBTableBody, MDBBtn, MDBCol, MDBRow } from "mdbreact";

const Bracket = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Bracket`;
	});

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
									<td className=" pt-2" style={{ width: "80%" }}>
										<input type="text" className="form-control" placeholder="Masukan Nama Atlet" />
									</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td className="pl-1 pt-0" style={{ width: "80%" }}>
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
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Pria Pemula</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Pemula</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Cadet</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Junior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Senior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Junior</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>

					<h3>Under 21</h3>
					<hr />
					<MDBRow>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
						<MDBCol size="6">
							<Tabel />
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</Fragment>
	);
};

export default Bracket;
