import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBModalFooter } from "mdbreact";
import { ICFacebook, ICTwitter, ICGoogle } from "../../assets";
import "./login.scss";

const Icon = ({ img }) => {
	return (
		<div className="icon-wrapper">
			<img src={img} alt="icon" className="icon-medsos" />
		</div>
	);
};

const Login = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Login`;
	});

	console.log(document.body);
	return (
		<MDBRow center className="my-5 card-login">
			<MDBCol md="4">
				<MDBCard>
					<MDBCardBody className="mx-4">
						<div className="text-center">
							<h3 className="dark-grey-text mb-5">
								<strong>
									Sign in <br /> K_Champ
								</strong>
							</h3>
						</div>
						<MDBInput icon="envelope" label="Your email" group type="email" validate error="wrong" success="right" />
						<MDBInput icon="lock" label="Your password" group type="password" validate containerClass="mb-0" />
						<p className="font-small blue-text d-flex justify-content-end pb-3">
							Forgot
							<a href="#!" className="blue-text ml-1">
								Password?
							</a>
						</p>
						<div className="text-center mb-3">
							<MDBBtn type="button" gradient="blue" className="tombol-sign">
								Sign in
							</MDBBtn>
						</div>
						<p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
						<div className="row my-2 d-flex justify-content-center social-wrapper">
							<Icon img={ICFacebook} />
							<Icon img={ICTwitter} />
							<Icon img={ICGoogle} />
						</div>
					</MDBCardBody>

					<MDBModalFooter className="mx-5 pt-3 mb-1">
						<p className="font-small grey-text d-flex justify-content-end">
							Not a member?
							<a href="#!" className="blue-text ml-1">
								Sign Up
							</a>
						</p>
					</MDBModalFooter>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	);
};

export default Login;
