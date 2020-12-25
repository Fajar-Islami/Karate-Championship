import React from "react";

import { MDBCardGroup, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage } from "mdbreact";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  console.log(posts);
  return (
    <div className="mx-auto ">
      <MDBCardGroup className="d-lg-flex  justify-content-start">
        {posts.map((post, i) => (
          <MDBCol lg="3" sm="12" className="mb-lg-3  mb-4 ">
            <MDBCard style={{ width: "22rem", height: "35rem" }}>
              <MDBCardImage src="https://placeimg.com/280/240/any" waves top />
              <MDBCardBody>
                <MDBCardTitle> {post.title} </MDBCardTitle>
                <MDBCardText> {post.body} </MDBCardText>
              </MDBCardBody>
              <MDBBtn href="#">Read More</MDBBtn>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBCardGroup>
    </div>
  );
};

export default Posts;
