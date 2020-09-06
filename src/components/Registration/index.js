import React, { useState, useEffect, Fragment } from "react";
import { MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn, MDBModal } from "mdbreact";

const Registration = () => {
	const [togglee, setToggle] = useState(true);

	var handleToggle = () => {
		setToggle({
			togglee: !togglee,
		});
	};

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Registration`;
	});
	console.log(togglee);
	return (
		<Fragment>
			<MDBBtn onClick={handleToggle}>Modal</MDBBtn>
			<MDBModal isOpen={togglee} toggle={handleToggle}>
				<MDBModalHeader toggle={handleToggle}>MDBModal title</MDBModalHeader>
				<MDBModalBody>(...a)</MDBModalBody>
				<MDBModalFooter>
					<MDBBtn color="secondary" onClick={handleToggle}>
						Close
					</MDBBtn>
					<MDBBtn color="primary">Save changes</MDBBtn>
				</MDBModalFooter>
			</MDBModal>
		</Fragment>
	);
};

export default Registration;
