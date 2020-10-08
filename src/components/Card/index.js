import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const Card = ({ datas, title = "Card title", body = "Some quick example text to build on the card title and make up the bulk of the card's content.", src = "https://placeimg.com/640/480/any" }) => {
  console.log(datas);

  return (
    <MDBCard>
      <MDBCardImage scr={src} waves top />
      <MDBCardBody>
        <MDBCardTitle> {title} </MDBCardTitle>
        <MDBCardText> {body} </MDBCardText>
        <MDBBtn href="#">Click</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
