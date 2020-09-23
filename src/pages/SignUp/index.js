import React, { useEffect } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBModalFooter, MDBContainer } from "mdbreact";
import { ICFacebook, ICTwitter, ICGoogle } from "../../assets";
// import "./login.scss";
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

const SignUp = () => {
	const history = useHistory();

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Sign Up`;
	});
	return (
		<div className="auth-LR">
			<div className="background-signUP">
				<div className="text">
					<h1>Sign Up</h1>
					<p>
						Have Account? <Link to="/login">Sign In</Link>
					</p>
				</div>
				<div className="box">
					<form action="" className="form">
						<input type="text" className="fullname" placeholder="Fullname" required />
						<input type="email" className="email" placeholder="qwerty@mail.com" required />
						<input type="text" className="username" placeholder="Username" required />
						<input type="password" className="password" placeholder="Password" required />
						<input type="password" className="password" placeholder="Re-Enter Password" required />
						<input type="submit" className="button" value="Sign Up" />
						<Link to="/">Back to home</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
