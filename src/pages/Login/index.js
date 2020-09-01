import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
	const [title, setTitle] = useState(0);

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Login`;
		document.body.className = "bg-primary";
	});

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-xl-4 col-lg-8 col-md-5">
				<Card>
					<Card.Header className="text-center">
						<strong>Login K_CHAMP</strong>
					</Card.Header>
					<Card.Body>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Control type="email" placeholder="Username or email" />
								<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<div className="mt-4">
								<Button variant="primary" type="submit" className="float-right btn-user">
									Cancel
								</Button>
								<Button variant="primary" type="submit" className="float-right mr-3">
									Login
								</Button>
							</div>
						</Form>
					</Card.Body>
				</Card>
				<div className="small mt-5 text-light text-center">
					<p>
						Forgot Password? <Link className="text-light">Klik disini</Link>{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
