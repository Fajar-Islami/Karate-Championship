import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdbreact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ title, body, img }) => {
  return (
    <MDBCard>
      {/* <MDBCardImage
        scr='https://images.unsplash.com/photo-1585537884142-512d204373d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        style={{ maxWidth: '640px', maxHeight: '480px' }}
        alt={title}
        waves
        top
      /> */}
      <MDBCardImage
        src={img}
        style={{ height: '240px', objectFit: 'cover' }}
        alt={title}
        waves
        top
      />
      <MDBCardBody>
        <MDBCardTitle> {title} </MDBCardTitle>
        <MDBCardText> {body} </MDBCardText>
        <Link to='/'>
          <MDBBtn color='info'>Click</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

Card.defaultProps = {
  title: 'Card title',
  body:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  img: 'https://placeimg.com/640/480/any',
};

export default Card;
