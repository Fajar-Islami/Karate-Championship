import React, { useState, useEffect, Fragment } from "react";
import { MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn, MDBModal } from "mdbreact";

const Registration = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle({
			toggle: !toggle,
		});
	};

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Registration`;
	});
	return (
		<Fragment>
			<MDBBtn onClick={handleToggle}>Modal</MDBBtn>
			<MDBModal isOpen={toggle} toggle={handleToggle}>
				<MDBModalHeader toggle={handleToggle}>MDBModal title</MDBModalHeader>
				<MDBModalBody>(...)</MDBModalBody>
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
