import React, { useEffect, Fragment } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBRow, MDBCol, MDBBtn, MDBBox, MDBTypography } from "mdbreact";
import { Tabel, Carousel } from "../../components";
import { useHistory } from "react-router";

const Home = () => {
	const history = useHistory();

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Home`;
	});

	return (
		<Fragment>
			<h1 className="pt-3"> Halaman Home</h1>
			<MDBRow>
				<MDBCol lg="7" sm="12" className="mb-5">
					<Carousel />
					<br />
					<MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={false} className="z-depth-1" slide>
						<MDBCarouselInner>
							<MDBCarouselItem itemId="1">
								<MDBView>
									<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide" />
								</MDBView>
							</MDBCarouselItem>
							<MDBCarouselItem itemId="2">
								<MDBView>
									<Tabel />
								</MDBView>
							</MDBCarouselItem>
						</MDBCarouselInner>
					</MDBCarousel>
				</MDBCol>
				<MDBCol lg="5" sm="12" className="mb-5">
					<Tabel />
					<div className="text-center mb-5">
						<MDBBtn type="button" gradient="blue" className="rounded-pill" alt="150x75" onClick={() => history.push("/medals")}>
							View Full List
						</MDBBtn>
					</div>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
					</div>
				</MDBCol>
			</MDBRow>
			<MDBBox className="py-3 pl-5 mb-5" bgColor="primary" color="white">
				<h3 className="font-weight-normal m-auto">News & Gallery</h3>
			</MDBBox>
			<MDBRow>
				<MDBCol lg="6" sm="12" className="mb-5">
					<MDBView hover zoom>
						<Carousel />
					</MDBView>
				</MDBCol>
				<MDBCol lg="6" sm="12" className="mb-5">
					<MDBTypography blockquote>
						<MDBBox tag="p" mb={0}>
							Welcome To Kejurnas Lemkari 2019
						</MDBBox>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBTypography>
				</MDBCol>
			</MDBRow>
		</Fragment>
	);
};

export default Home;
