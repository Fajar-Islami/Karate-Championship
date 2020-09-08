import React, { useContext } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import { DummyContext } from "../../context/dummyContext";
import { Link, useHistory } from "react-router-dom";

const Card = ({ datas }) => {
	let history = useHistory();
	const { dispatch } = useContext(DummyContext);
	// const handleDetail = (id) => {
	// 	console.log(id);
	// 	history.push(`../../pages/detailDummy/${id}`);
	// };

	return (
		<div style={{ maxWidth: "22rem" }} className="mb-3 ">
			<MDBCard>
				{/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves /> */}
				<MDBCardBody>
					<MDBCardTitle>{datas.judul}</MDBCardTitle>
					<MDBCardText>{datas.detail}</MDBCardText>
					<Link onClick={() => dispatch({ type: "DETAIL_DUMMY", id: datas.id })} color="indigo" to="/detail-dummy/1">
						Info Judul {datas.id}
					</Link>
					{/* <MDBBtn onClick={() => handleDetail(datas.id)} color="indigo">
						Detail
					</MDBBtn> */}
				</MDBCardBody>
			</MDBCard>
		</div>
	);
};

export default Card;
