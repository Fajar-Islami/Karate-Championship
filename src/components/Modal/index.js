import React, { useState, useEffect, Fragment } from "react";
import { MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn, MDBModal, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

const Modal = (props) => {
	const [togglee, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle((togglee) => !togglee);
	};

	// Lifecycle React Hooks
	// useEffect(() => {
	// 	document.title = `Registration`;
	// }, [togglee]);

	// console.log(togglee);
	// console.log(props);
	// console.log(props.title);
	// console.log(props.title.length);

	const label = props.label;
	const judul = props.judul;
	const teks = props.tulisan;
	const nama = props.title;
	const ic = props.icon;
	const ty = props.type;

	// console.log(props);

	return (
		<Fragment>
			<Link onClick={handleToggle} to="#">
				{label}
			</Link>
			{/* <form> */}
			<MDBModal isOpen={togglee} toggle={handleToggle}>
				<MDBModalHeader toggle={handleToggle}>{judul} </MDBModalHeader>
				<MDBModalBody className="py-0">
					<p className="pt-3">{teks}</p>
					(...)
					{/* <MDBInput label="E-mail address" outline icon="envelope" /> */}
					{/* <MDBInput label="Username" icon="user" /> */}
					{nama.map((namas, i) => {
						return <MDBInput key={i} label={namas} outline icon={ic[i]} group validate error="wrong" success="right" type={ty[i]} className="mb-0" />;
					})}
				</MDBModalBody>
				<MDBModalFooter>
					<MDBBtn color="secondary" onClick={handleToggle}>
						Close
					</MDBBtn>
					<MDBBtn color="primary">Save changes</MDBBtn>
				</MDBModalFooter>
			</MDBModal>
			{/* </form> */}
		</Fragment>
	);
};

export default Modal;
