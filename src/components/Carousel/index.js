import React from "react";
import { MDBCarouselInner, MDBCarousel, MDBCarouselItem, MDBView, MDBMask, MDBCarouselCaption, MDBCol, MDBCardTitle, MDBIcon, MDBBtn } from "mdbreact";
import { LoginBaruBG, SignUpBG, SignUp, SignIn } from "../../assets";

const caption = () => {
  return (
    <MDBCol className="py-3">
      <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
      <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
      <MDBBtn outline color="white" className="mb-5">
        <MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
      </MDBBtn>
    </MDBCol>
  );
};

// const tinggi = () => {
// 	return height:'100vh'
// }

const Carousel = ({ full = "" }) => {
  return (
    <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} style={{ height: full }} className="z-depth-1">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img style={{ height: full }} className="d-block w-100" src={SignUp} alt="First slide" />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>{caption()}</MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img style={{ height: full }} className="d-block w-100" src={SignIn} alt="Second slide" />
            <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>{caption()}</MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img style={{ height: full }} className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>{caption()}</MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
