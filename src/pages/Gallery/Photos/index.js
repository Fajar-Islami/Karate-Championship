import React, { useState, useEffect, Fragment } from "react";
import { MDBRow, MDBCol, MDBView, MDBTypography, MDBBox, MDBMask } from "mdbreact";

const Photos = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Photos`;
	});
	return (
		<Fragment>
			<h3 className="pt-3">Halaman Photos</h3>
			<hr />
			<MDBRow>
				<MDBCol size="6">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
					</MDBView>
				</MDBCol>
				<MDBCol size="6">
					<MDBTypography blockquote>
						<MDBBox tag="p" mb={0}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
						</MDBBox>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBTypography>
				</MDBCol>
			</MDBRow>
			<br />
			<MDBRow>
				<MDBCol size="6">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
					</MDBView>
				</MDBCol>
				<MDBCol size="6">
					<MDBTypography blockquote>
						<MDBBox tag="p" mb={0}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
						</MDBBox>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBTypography>
				</MDBCol>
			</MDBRow>
			<br />
			<MDBRow>
				<MDBCol size="6">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
					</MDBView>
				</MDBCol>
				<MDBCol size="6">
					<MDBTypography blockquote>
						<MDBBox tag="p" mb={0}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
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

export default Photos;
