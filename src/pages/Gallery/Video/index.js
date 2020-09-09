import React, { useEffect, Fragment } from "react";
import { MDBRow, MDBCol, MDBTypography, MDBBox } from "mdbreact";

const Video = () => {
	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Video`;
	});
	return (
		<Fragment>
			<h3 className="pt-3">Halaman Video </h3>
			<hr />
			<MDBRow>
				<MDBCol size="6">
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
					</div>
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
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
					</div>
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
					<div className="embed-responsive embed-responsive-16by9">
						<iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
					</div>
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

export default Video;
