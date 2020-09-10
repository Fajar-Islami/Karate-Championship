import React, { Fragment, useState } from "react";
import { MDBTable, MDBTableBody, MDBBtn, MDBRow, MDBCol, MDBFormInline, MDBInput } from "mdbreact";
import { Dropdown } from "../../components";
import { Link } from "react-router-dom";

const Registration = () => {
	const [checked, setChecked] = useState("");
	const handleCheck = (status) => () => {
		setChecked((checked) => status);
	};

	return (
		<Fragment>
			<h3 className="pt-3">Halaman Registration</h3>
			<hr />
			<form>
				<MDBTable borderless>
					<MDBTableBody>
						<tr>
							<td className="font-weight-normal col-2">Pilih Jenis Pendaftaran Akun</td>

							<td className=" pt-2 col-9">
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Pengprov</td>
							<td className=" pt-2">
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Wilayah</td>
							<td className=" pt-2">
								<Dropdown />
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<hr />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Nama Kontingen</td>
							<td className=" pt-2">
								<input type="text" id="exampleDisabled" className="form-control" placeholder="Disabled input" disabled />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Nama Pemegang Akun</td>
							<td className=" pt-2">
								<MDBRow>
									<MDBCol size="6">
										<input type="text" className="form-control" placeholder="Nama Depan" />
									</MDBCol>
									<MDBCol size="6">
										<input type="text" className="form-control" placeholder="Nama Belakang" />
									</MDBCol>
								</MDBRow>
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Jenis Kelamin</td>
							<td className=" pt-2">
								<MDBFormInline>
									{/* <MDBRow> */}
									{/* <MDBCol size="6"> */}
									<MDBInput gap onClick={handleCheck(1)} checked={checked === 1 ? true : false} label="Laki-Laki" type="radio" id="radio1" containerClass="mr-5" />
									{/* </MDBCol> */}
									{/* <MDBCol size="6"> */}
									<MDBInput gap onClick={handleCheck(2)} checked={checked === 2 ? true : false} label="Perempuan" type="radio" id="radio2" />
									{/* </MDBCol> */}
									{/* </MDBRow> */}
								</MDBFormInline>
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Alamat</td>
							<td className=" pt-2">
								<input type="text" className="form-control" placeholder="Alamat" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Telp</td>
							<td className=" pt-2">
								<input type="text" className="form-control" placeholder="No Telepon" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Email</td>
							<td className=" pt-2">
								<input type="Email" className="form-control" placeholder="Your e-mail" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Password</td>
							<td className=" pt-2">
								<input type="password" className="form-control" placeholder="Password" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Repeat Password</td>
							<td className=" pt-2">
								<input type="password" className="form-control" placeholder="Repeat Password" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Foto</td>
							<td className=" pt-2">
								<div className="custom-file">
									<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
									<label className="custom-file-label" htmlFor="inputGroupFile01">
										Pilih Foto
									</label>
								</div>
							</td>
						</tr>

						<tr>
							<td></td>
							<td className=" pl-1 pt-0">
								<MDBBtn color="primary">Register</MDBBtn> <Link>Click here </Link> to download manual guide for registration.
							</td>
						</tr>
					</MDBTableBody>
				</MDBTable>
			</form>
		</Fragment>
	);
};

export default Registration;
