import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router";

import "./style.scss";
import { MDBBtn, MDBIcon, MDBCardImage, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBTableHead, MDBTable, MDBTableBody, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
import { Link } from "react-router-dom";
import { Image } from "../../components";
import { ICNews, ICMatches, ICUpcoming, ICPhoto, ICVideo } from "../../assets";

const Home2 = () => {
  const history = useHistory();

  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <Fragment>
      <div className="home-2">
        <div className="top">
          <h1>Buka Kerjunas Lemkari 2019</h1>
          <div className="top-kiri">
            <h3>Menpora Harap Ajang ini Digelar Rutin untuk Mencari Bibit Atlet Berprestasi. Segera Daftarkan Atlet-atlet Anda</h3>
            {/* <div className="btn-regis"> */}
            <Link className="btn-regis pb-1 px-3  " to="/registration">
              <span>Registration</span>
            </Link>
            {/* </div> */}
          </div>
          <div className="top-kanan"></div>
        </div>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-5 bar-title py-2" style={{ backgroundColor: "rgba(102, 199, 235, 0.52)" }}>
            <Image image={ICNews} height="10vh" className="mr-3" />
            Lastest News
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-flex justify-content-around">
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                  <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-5 bar-title py-2" style={{ backgroundColor: "rgba(253, 9, 0, 0.38)" }}>
            <Image image={ICVideo} height="10vh" className="mr-3" />
            Video's
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-flex justify-content-around">
            <MDBCol style={{ maxWidth: "38rem" }}>
              <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Live Stream Now !!</h1>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
              </div>
            </MDBCol>
            <MDBCol style={{ maxWidth: "38rem" }}>
              <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Lastest Video</h1>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
              </div>
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-5 bar-title py-2" style={{ backgroundColor: "rgba(253, 197, 0, 0.38)" }}>
            <Image image={ICMatches} height="10vh" className="mr-3" />
            Lastest Matches
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-flex justify-content-around">
            <MDBCol lg="5">
              <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                  {/* Dummy */}
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  {/* Dummy */}
                </MDBTableBody>
              </MDBTable>
              <div className="text-center mb-5">
                <MDBBtn type="button" gradient="blue" className="rounded-pill" alt="150x75" onClick={() => history.push("/medals")}>
                  View Full List
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol lg="5">
              <MDBCarousel activeItem={1} length={2} interval={3000} showControls={false} onHoverStop={false} showIndicators={false} slide>
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      {/* Dummy */}
                      <h5>Kategori</h5>
                      <MDBTable>
                        <MDBTableHead color="primary-color" textWhite>
                          {/* Dummy */}
                          <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          {/* Dummy */}
                        </MDBTableBody>
                      </MDBTable>
                      <h5>Kategori 2</h5>
                      <MDBTable striped>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr>
                            <td>1</td>
                            <td>res</td>
                            <td>adad</td>
                            <td>@m1qqq</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>cccccc</td>
                            <td>aaaaa</td>
                            <td>@aaaaa</td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                      {/* Dummy */}
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      {/* Dummy */}
                      <h5>Kategori 3</h5>
                      <MDBTable striped>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr>
                            <td>1</td>
                            <td>res</td>
                            <td>adad</td>
                            <td>@m1qqq</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>cccccc</td>
                            <td>aaaaa</td>
                            <td>@aaaaa</td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                      <h5>Kategori 4</h5>
                      <MDBTable striped>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr>
                            <td>1</td>
                            <td>res</td>
                            <td>adad</td>
                            <td>@m1qqq</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>cccccc</td>
                            <td>aaaaa</td>
                            <td>@aaaaa</td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                      {/* Dummy */}
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-5 bar-title py-2" style={{ backgroundColor: "rgba(81, 253, 0, 0.38)" }}>
            <Image image={ICUpcoming} height="10vh" className="mr-3" />
            Upcoming Match
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBContainer fluid>
            <MDBCarousel activeItem={1} length={2} interval={2000} onHoverStop={false} showControls={false} showIndicators={false} slide>
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <MDBRow>
                      <MDBCol lg="5">
                        {/* Dummy */}
                        <h5>Kategori</h5>
                        <MDBTable>
                          <MDBTableHead color="primary-color" textWhite>
                            {/* Dummy */}
                            <tr>
                              <th>#</th>
                              <th>First</th>
                              <th>Last</th>
                              <th>Handle</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            {/* Dummy */}
                          </MDBTableBody>
                        </MDBTable>
                        <h5>Kategori 2</h5>
                        <MDBTable striped>
                          <MDBTableHead>
                            <tr>
                              <th>#</th>
                              <th>First</th>
                              <th>Last</th>
                              <th>Handle</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            <tr>
                              <td>1</td>
                              <td>res</td>
                              <td>adad</td>
                              <td>@m1qqq</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>cccccc</td>
                              <td>aaaaa</td>
                              <td>@aaaaa</td>
                            </tr>
                          </MDBTableBody>
                        </MDBTable>
                        {/* Dummy */}
                      </MDBCol>
                      <MDBCol lg="5">
                        {/* Dummy */}
                        <h5>Kategori</h5>
                        <MDBTable>
                          <MDBTableHead color="primary-color" textWhite>
                            {/* Dummy */}
                            <tr>
                              <th>#</th>
                              <th>First</th>
                              <th>Last</th>
                              <th>Handle</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            {/* Dummy */}
                          </MDBTableBody>
                        </MDBTable>
                        <h5>Kategori 2</h5>
                        <MDBTable striped>
                          <MDBTableHead>
                            <tr>
                              <th>#</th>
                              <th>First</th>
                              <th>Last</th>
                              <th>Handle</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            <tr>
                              <td>1</td>
                              <td>res</td>
                              <td>adad</td>
                              <td>@m1qqq</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>cccccc</td>
                              <td>aaaaa</td>
                              <td>@aaaaa</td>
                            </tr>
                          </MDBTableBody>
                        </MDBTable>
                        {/* Dummy */}
                      </MDBCol>
                    </MDBRow>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    {/* Dummy */}
                    <h5>Kategori 3</h5>
                    <MDBTable striped>
                      <MDBTableHead>
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>res</td>
                          <td>adad</td>
                          <td>@m1qqq</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>cccccc</td>
                          <td>aaaaa</td>
                          <td>@aaaaa</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                    <h5>Kategori 4</h5>
                    <MDBTable striped>
                      <MDBTableHead>
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>res</td>
                          <td>adad</td>
                          <td>@m1qqq</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>cccccc</td>
                          <td>aaaaa</td>
                          <td>@aaaaa</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                    {/* Dummy */}
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-5 bar-title py-2" style={{ backgroundColor: "#AFE2F5" }}>
            <Image image={ICPhoto} height="10vh" className="mr-3" />
            Photo Galleries
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-flex justify-content-around mb-5">
            <MDBCol style={{ maxWidth: "38rem" }}>
              <Link to="/">
                <MDBView hover zoom>
                  <MDBCarousel interval={3000} activeItem={1} length={3} showControls={false} onHoverStop={false} showIndicators={false} className="z-depth-1" slide>
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId="1">
                        <MDBView hover>
                          <img className="d-block w-100 img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" alt="First slide" />
                        </MDBView>
                        <MDBMask className="flex-center" overlay="black-light">
                          <p className="white-text">Zoom effect</p>
                        </MDBMask>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                        <MDBView hover>
                          <img className="d-block w-100 img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg" alt="Second slide" />
                        </MDBView>
                        <MDBMask className="flex-center" overlay="black-light">
                          <p className="white-text">Zoom effect</p>
                        </MDBMask>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <MDBView hover>
                          <img className="d-block w-100 img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
                        </MDBView>
                        <MDBMask className="flex-center" overlay="black-light">
                          <p className="white-text">Zoom effect</p>
                        </MDBMask>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBView>
              </Link>
            </MDBCol>
            <MDBCol style={{ maxWidth: "38rem" }}>
              <MDBView hover zoom>
                <img src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg" className="img-fluid" alt="" />
                <MDBMask className="flex-center" overlay="black-light">
                  <p className="white-text">Zoom effect</p>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>
      </div>
    </Fragment>
  );
};

export default Home2;
