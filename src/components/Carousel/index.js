import React, { useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact';

const Carousel = ({ img = [], ...rest }) => {
  // const [images] = useState(img);
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={img.length}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'>
        <MDBCarouselInner>
          {img.map((image, i) => {
            return (
              <MDBCarouselItem itemId={i + 1} key={i + 1}>
                <MDBView>
                  <img className='d-block' src={image} {...rest} />
                </MDBView>
              </MDBCarouselItem>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
