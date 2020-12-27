import React from "react";

import {
  MDBCardGroup,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
  MDBTypography,
} from "mdbreact";
import { Link } from "react-router-dom";
import { IMGKarate1 } from "../../assets";
const Posts = ({ posts }) => {
  console.log("posts: ", posts);
  return (
    <div className='mx-auto '>
      <MDBCardGroup className='d-lg-flex  justify-content-start'>
        {posts.map((post, i) => (
          <MDBCol md='4' sm='12' className='mb-lg-3  mb-4 ' key={i}>
            <MDBCard style={{ height: "30rem" }}>
              <MDBCardImage
                src={post.gambar}
                waves
                top
                className='img-fluid'
                style={{ height: "15rem", objectFit: "cover" }}
                alt={post.judul}
              />
              <MDBCardBody>
                <div
                  className='h3-responsive'
                  style={{ fontWeight: "500", textTransform: "capitalize" }}
                >
                  {post.judul}
                </div>
                <small className=' mt-4 grey-text t-muted'>{post.isi.substr(0, 150)}.....</small>
              </MDBCardBody>
              <Link className='btn-default btn Ripple-parent' to={`/news/detailnews/${post.id}`}>
                Read More
              </Link>
              {/* </MDBBtn> */}
            </MDBCard>
          </MDBCol>
        ))}
      </MDBCardGroup>
    </div>
  );
};

export default Posts;
