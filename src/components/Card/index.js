import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const Card = ({ datas }) => {
  console.log(datas);

  return (
    <MDBCard>
      <MDBCardImage src="https://placeimg.com/640/480/any" waves top />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
        <MDBBtn href="#">Click</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
