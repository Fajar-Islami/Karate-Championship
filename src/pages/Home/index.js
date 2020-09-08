import React, { useEffect, Fragment } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";

const Home = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Home`;
	});

	return (
		<Fragment>
			<h1 className="pt-3"> Halaman Home</h1>
			<MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1" slide>
				<MDBCarouselInner>
					<MDBCarouselItem itemId="1">
						<MDBView>
							<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide" />
						</MDBView>
					</MDBCarouselItem>
					<MDBCarouselItem itemId="2">
						<MDBView>
							<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide" />
						</MDBView>
					</MDBCarouselItem>
					<MDBCarouselItem itemId="3">
						<MDBView>
							<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide" />
						</MDBView>
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		</Fragment>
	);
};

export default Home;
