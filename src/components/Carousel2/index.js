import React, { useState } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBRow, MDBCol } from "mdbreact";

const Carousel2 = ({ data = [], ...rest }) => {
  const [dataEntries, setDataEntries] = useState(data);

  const lenghtC = dataEntries.length;
  console.log(dataEntries);
  // console.log(...rest);
  return (
    // <MDBCarousel activeItem={1} length={lenghtC} interval={2000} onHoverStop={false} showControls={false} showIndicators={false} slide>
    <MDBCarousel activeItem={1} length={lenghtC} {...rest}>
      <MDBCarouselInner>
        {dataEntries.map((data, i) => {
          return (
            <MDBCarouselItem itemId={i + 1} key={i + 1}>
              {data}
              {/* <MDBView>
                <MDBRow className="d-flex justify-content-around">
                  <MDBCol style={{ maxWidth: "45vw" }} sm="12">
                    <h5>Kategori 3</h5>
                    {data}
                  </MDBCol>
                </MDBRow>
              </MDBView> */}
            </MDBCarouselItem>
          );
        })}
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel2;
