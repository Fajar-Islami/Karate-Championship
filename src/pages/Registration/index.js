import React, { Fragment, useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBBtn, MDBRow, MDBCol, MDBFormInline, MDBInput, MDBContainer, MDBAnimation } from "mdbreact";
import { Dropdown, RadioButton, Input } from "../../components";
import { Link } from "react-router-dom";

const Registration = () => {
  useEffect(() => {
    document.title = `Registration`;
  });
  const [checked, setChecked] = useState("");
  const handleCheck = (status) => () => {
    setChecked((checked) => status);
  };

  return (
    <Fragment>
      <MDBContainer fluid>
        <MDBAnimation reveal type="fadeInUp">
          <h3 className="pt-3">Halaman Registration</h3>
          <hr />
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <form>
            <MDBTable borderless>
              <MDBTableBody>
                <Dropdown label="Pilih Jenis Pendaftaran Akun" selected="Pilih Role" option={["Sebagai Admin Pengprov", "Sebagai Admin Wilayah"]} />
                <Dropdown label="Pengprov" selected="--Select--" option={["Aceh", "Bali"]} />
                <Dropdown label="Wilayah" selected="Pilih Wilayah" option={["Wilayah I", "Wilayah II", "Wilayah III", "Wilayah IV", "Wilayah V"]} />
                {/* <tr>
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
						</tr> */}
                <Input label="Nama Kontingen" type="text" placeholder="Nama kontingen" disabled />

                <tr>
                  <td className="font-weight-normal">Nama Pemegang Akun</td>
                  <td className="font-weight-bold">:</td>
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
                  <td className="font-weight-bold">:</td>
                  <td className=" pt-2">
                    <MDBFormInline>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio1" checked /> Laki-laki
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio1" checked /> Perempuan
                        </label>
                      </div>
                    </MDBFormInline>
                  </td>
                </tr>
                <Input label="Alamat" type="text" placeholder="Alamat" />
                <Input label="Telepon" type="text" placeholder="Telepon" />
                <Input label="Email" type="email" placeholder="Email" />
                <Input label="Password" type="password" placeholder="Password" />
                <Input label="Repeat Password" type="password" placeholder="Repeat Password" />

                {/* <tr>
							<td className="font-weight-normal">Nama Kontingen</td>
							<td className="font-weight-bold">:</td>
							<td className=" pt-2">
								<input type="text" id="exampleDisabled" className="form-control" placeholder="Nama Kontingen" disabled />
							</td>
						</tr>
						
						<tr>
							<td className="font-weight-normal">Alamat</td>
							<td className="font-weight-bold">:</td>
							<td className=" pt-2">
								<input type="text" className="form-control" placeholder="Alamat" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Telp</td>
							<td className="font-weight-bold">:</td>
							<td className=" pt-2">
								<input type="text" className="form-control" placeholder="No Telepon" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Email</td>
							<td className="font-weight-bold">:</td>
							<td className=" pt-2">
								<input type="Email" className="form-control" placeholder="Your e-mail" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Password</td>
							<td className="font-weight-bold">:</td>
							<td className=" pt-2">
								<input type="password" className="form-control" placeholder="Password" />
							</td>
						</tr>
						<tr>
							<td className="font-weight-normal">Repeat Password</td>
							<td className="font-weight-bold">:</td>
							<td className=" pt-2">
								<input type="password" className="form-control" placeholder="Repeat Password" />
							</td>
						</tr> */}
                <tr>
                  <td className="font-weight-normal">Foto</td>
                  <td className="font-weight-bold">:</td>
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
                  <td></td>
                  <td className=" pl-1 pt-0">
                    <MDBBtn color="primary">Register</MDBBtn> <Link>Click here </Link> to download manual guide for registration.
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </form>
        </MDBAnimation>
      </MDBContainer>
    </Fragment>
  );
};

export default Registration;
