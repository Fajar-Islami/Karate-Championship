import React, { useEffect, Fragment } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

const Home = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Home`;
	});

	return (
		<Fragment>
			<h1 className="pt-3"> Halaman Home</h1>
			<MDBRow>
				<MDBCol size="7">
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
				</MDBCol>
				<MDBCol size="5">
					<MDBAnimation reveal type="bounceInUp">
						<img alt="A view on mountains." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" />
					</MDBAnimation>
					<MDBAnimation reveal type="tada">
						<img alt="Cottage on a lake surrounded by mountains." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" />
					</MDBAnimation>
					<MDBAnimation reveal type="fadeInLeft">
						<img alt="A boat floating on an ocean" className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />
					</MDBAnimation>
					<MDBAnimation reveal type="fadeInRight">
						<img alt="View on mountains from mountain top." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
					</MDBAnimation>
					<MDBAnimation reveal type="fadeInRight">
						<img alt="Rocky shore in the morning." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" />
					</MDBAnimation>
					<MDBAnimation reveal type="fadeInUp">
						<img alt="Rocky shore in the morning." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
					</MDBAnimation>
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol size="4">.col-4</MDBCol>
				<MDBCol size="4">.col-4</MDBCol>
				<MDBCol size="4">.col-4</MDBCol>
			</MDBRow>
		</Fragment>
	);
};

export default Home;
