import React, { useEffect, Fragment } from "react";
import { MDBRow, MDBCol, MDBTypography, MDBBox, MDBContainer, MDBAnimation } from "mdbreact";

const Video = () => {
  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Video`;
  });
  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type="fadeInUp">
        <hr className="my-4" />
      </MDBAnimation>
      <MDBAnimation reveal type="fadeInUp">
        <MDBRow>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
          <MDBCol size="3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
            </div>
            <MDBBox tag="footer" mb={3} className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </MDBBox>
          </MDBCol>
        </MDBRow>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Video;
