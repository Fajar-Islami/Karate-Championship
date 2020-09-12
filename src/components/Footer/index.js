import React, { Fragment } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BSP, Forki } from "../../assets";

const Footer = () => {
	return (
		<Fragment>
			<h4 className="d-flex justify-content-center pt-3">Official Partner</h4>
			<hr />
			<div className="d-flex justify-content-center">
				{/* <div className="p-1 col-example "> */}
				<img src={BSP} alt="" style={{ height: "70px" }} title="BSP" />
				{/* </div> */}
				{/* <div className="p-1 col-example "> */}
				<img src={Forki} alt="" style={{ height: "70px" }} title="Forki" />
				{/* </div> */}
			</div>
			<MDBFooter color="blue" className="font-small pt-4 mt-4">
				<MDBContainer fluid className="text-center text-md-left">
					<MDBRow>
						<MDBCol md="2">
							<h5 className="title">Generals</h5>
							<ul>
								<li className="list-unstyled">
									<a href="/">K-champ</a>
								</li>
								<li className="list-unstyled">
									<a href="/">Home</a>
								</li>
								<li className="list-unstyled">
									<a href="/Registration">Registration</a>
								</li>
								<li className="list-unstyled">
									<a href="/Login">Login</a>
								</li>
							</ul>
						</MDBCol>
						<MDBCol md="3">
							<h5 className="title">Informations</h5>
							<ul>
								<li className="list-unstyled">
									<a href="/">Time and Place</a>
								</li>
								<li className="list-unstyled">
									<a href="/">Classes Contested</a>
								</li>
								<li className="list-unstyled">
									<a href="/">General Provisions</a>
								</li>
								<li className="list-unstyled">
									<a href="/">Hotel and Resort</a>
								</li>
								<li className="list-unstyled">
									<a href="/">Foods</a>
								</li>
							</ul>
						</MDBCol>
						<MDBCol md="2">
							<h5 className="title">News</h5>
							<ul>
								<li className="list-unstyled">
									<a href="/news">News</a>
								</li>
								<li className="list-unstyled">
									<a href="/photos">Photos</a>
								</li>
								<li className="list-unstyled">
									<a href="/videos">Video</a>
								</li>
							</ul>
						</MDBCol>
						<MDBCol md="3">
							<h5 className="title">Results</h5>
							<ul>
								<li className="list-unstyled">
									<a href="/schedulesResult">Schedules and Result</a>
								</li>
								<li className="list-unstyled">
									<a href="/teams">Teams</a>
								</li>
								<li className="list-unstyled">
									<a href="/categories">Categories</a>
								</li>
								<li className="list-unstyled">
									<a href="/statistic">Statistics</a>
								</li>
								<li className="list-unstyled">
									<a href="/medals">Medals</a>
								</li>
								<li className="list-unstyled">
									<a href="/bracket">Bracket</a>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
					<h6 style={{fontSize: 12}}>Downloads</h6>
					<h6 style={{fontSize: 12}}>Proposal Indonesia | Proposal English | Manual Guide</h6>
					<h6 style={{fontSize: 12}}>Supported By</h6>
					<h6 style={{fontSize: 12}}>All Right Reserved &copy; Brilyan Sport Technology 2011</h6>
				</MDBContainer>
				<div className="footer-copyright text-center py-3">
					<MDBContainer fluid>
						
					</MDBContainer>
				</div>
			</MDBFooter>
		</Fragment>
	);
};

export default Footer;
