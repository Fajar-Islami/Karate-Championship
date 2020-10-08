import React from "react";

import { MDBListGroup, MDBListGroupItem } from "mdbreact";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <MDBListGroup>
      {posts.map((post, i) => (
        <MDBListGroupItem key={i}>{post.title}</MDBListGroupItem>
      ))}
    </MDBListGroup>
  );
};

export default Posts;
