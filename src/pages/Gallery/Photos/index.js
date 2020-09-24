import React, { useState, useEffect, Fragment } from "react";
import { MDBRow, MDBCol, MDBView, MDBTypography, MDBBox, MDBMask } from "mdbreact";
import "../Photos/style.scss"

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
				<MDBCol size="4">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBView>
				</MDBCol>
				<MDBCol size="4">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBView>
				</MDBCol>
				<MDBCol size="4">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBView>
				</MDBCol>
			</MDBRow>
			<br/>
			<MDBRow>
				<MDBCol size="4">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBView>
				</MDBCol>
				<MDBCol size="4">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBView>
				</MDBCol>
				<MDBCol size="4">
					<MDBView hover zoom>
						<img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
						<MDBMask className="flex-center">
							<p className="white-text">Zoom effect</p>
						</MDBMask>
						<MDBBox tag="footer" mb={3} className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</MDBBox>
					</MDBView>
				</MDBCol>
			</MDBRow>
			<br/>
			<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-end">
				<li class="page-item disabled">
				<a class="page-link" href="#" tabindex="-1">Previous</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item">
				<a class="page-link" href="#">Next</a>
				</li>
			</ul>
			</nav>
		</Fragment>
	);
};

export default Photos;
