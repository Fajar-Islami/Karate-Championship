import React, { useEffect } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBModalFooter, MDBContainer } from "mdbreact";
import { ICFacebook, ICTwitter, ICGoogle } from "../../assets";
import "./login.scss";
import { Modal } from "../../components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Icon = ({ img }) => {
	return (
		<div className="icon-wrapper">
			<img src={img} alt="icon" className="icon-medsos" />
		</div>
	);
};

const Login = () => {
	const history = useHistory();

	// Sign Up
	const labelSU = ["Nama Lengkap", "Email", "Confirm Your email", "password"];
	const iconSU = ["user", "envelope", "exclamation-triangle", "lock"];
	const typeSU = ["text", "email", "email", "password"];
	const textSU = "Harap isi bidang berikut";
	// Forgot PW
	const labelFP = ["Email"];
	const iconFP = ["envelope"];
	const typeFP = ["email"];
	const textFP = "Harap email masukan Anda";

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Login`;
		// document.body.className = "bg-login";

		// WilllUnMount
		// return () => {
		// 	document.body.className = "";
		// };
	});
	// console.log(document);
	// console.log(document.body);
	return (
		// <MDBContainer fluid>
		// 	{/* <div className="bg"> */}
		// 	<MDBRow center className="mt-4 card-login">
		// 		<MDBCol className="col-lg-4 col-sm-5">
		// 			<MDBCard>
		// 				<MDBCardBody className="mx-4">
		// 					<div className="text-center">
		// 						<h3 className="dark-grey-text mb-2">
		// 							<strong>
		// 								Sign in <br /> K_Champ
		// 							</strong>
		// 						</h3>
		// 					</div>
		// 					<MDBInput icon="envelope" label="Your email" group type="email" validate error="wrong" success="right" />
		// 					<MDBInput icon="lock" label="Your password" group type="password" validate containerClass="mb-0" />
		// 					<p className="font-small d-flex justify-content-end pb-1">
		// 						<Modal title={labelFP} icon={iconFP} type={typeFP} judul="Forgot Password ?" label="Forgot Password ?" tulisan={textFP}>
		// 							Forgot PW
		// 						</Modal>
		// 					</p>
		// 					<div className="text-center mb-3">
		// 						<MDBBtn type="button" gradient="blue" className="rounded-pill" alt="150x75" onClick={() => history.push("/")}>
		// 							Sign in
		// 						</MDBBtn>
		// 					</div>
		// 					<p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign Up with:</p>
		// 					<div className="row my-2 d-flex justify-content-center social-wrapper">
		// 						<Icon img={ICFacebook} />
		// 						<Icon img={ICTwitter} />
		// 						<Icon img={ICGoogle} />
		// 					</div>
		// 				</MDBCardBody>

		// 				<MDBModalFooter className="mx-5 pt-3 mb-1">
		// 					<div className="font-small grey-text d-flex justify-content-end">Not a member?</div>
		// 					<Modal title={labelSU} icon={iconSU} type={typeSU} label="Sign Up" judul="Sign Up" tulisan={textSU} />
		// 				</MDBModalFooter>
		// 			</MDBCard>
		// 		</MDBCol>
		// 	</MDBRow>
		// 	{/* </div> */}
		// </MDBContainer>
		<div className="auth-LR">
			<div className="background-login">
				<div className="text">
					<h1>Login</h1>
					<p>
						No Account? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
				<div className="box">
					<form action="" className="form">
						<input type="text" className="username" placeholder="Username" required />
						<input type="password" className="password" placeholder="Password" required />
						<input type="submit" className="button" value="Login" onClick={() => history.push("/")} />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
