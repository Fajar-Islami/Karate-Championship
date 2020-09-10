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
			<h3 className="pt-3">Halaman Bracket</h3>
			<hr />
			<form>
				<MDBTable borderless>
					<MDBTableBody>
						<tr>
							<td style={{ width: "10%" }}>Age Categories</td>
							<td style={{ width: "1%" }}>:</td>
							<td className=" pt-2" style={{ width: "80%" }}>
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td>Gender</td>
							<td>:</td>
							<td className=" pt-2" style={{ width: "80%" }}>
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td>Categories</td>
							<td>:</td>
							<td className=" pt-2" style={{ width: "80%" }}>
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td>Class Categories</td>
							<td>:</td>
							<td className=" pt-2" style={{ width: "80%" }}>
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td>Athlete Name</td>
							<td>:</td>
							<td className=" pt-2" style={{ width: "80%" }}>
								<input type="email" className="form-control" placeholder="Your e-mail" />
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
		</Fragment>
	);
};

export default Bracket;
