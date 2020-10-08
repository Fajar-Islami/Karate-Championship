import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router";

import "./style.scss";
import { MDBBtn, MDBCardImage, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBCol, MDBView, MDBContainer, MDBAnimation } from "mdbreact";
import { Link } from "react-router-dom";
import { Image, TabelMedals, TabelMatches, Carousel2, Card } from "../../components";
import { ICNews, ICMatches, ICUpcoming, ICPhoto, ICVideo } from "../../assets";
import { MedalMatches, LastestMatch, UpcomingMatch } from "./data";

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
            <Link className="btn-regis pb-1 px-3  " to="/registration">
              <span>Registration</span>
            </Link>
          </div>
          <div className="top-kanan"></div>
        </div>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-sm-3 my-lg-5 bar-title py-2" style={{ backgroundColor: "rgba(102, 199, 235, 0.52)" }}>
            <Image image={ICNews} height="10vh" className="mr-3" />
            Lastest News
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-lg-flex  justify-content-around">
            <MDBCol lg="4" sm="12" className="mb-lg-0 mb-4 ">
              <Card />
            </MDBCol>
            <MDBCol lg="4" sm="12" className="mb-lg-0 mb-4">
              <Card />
            </MDBCol>
            <MDBCol lg="4" sm="12" className="mb-lg-0 mb-4">
              <Card />
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-sm-3 my-lg-5 bar-title py-2" style={{ backgroundColor: "rgba(253, 9, 0, 0.38)" }}>
            <Image image={ICVideo} height="10vh" className="mr-3" />
            Video's
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-lg-flex  justify-content-around ">
            <MDBCol lg="6" sm="12">
              <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Live Stream Now !!</h1>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Embeds Page" width="560" height="315" className="embed-responsive-item" src="https://www.youtube.com/embed/DDU-rZs-Ic4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MDBCol>
            <MDBCol lg="6" sm="12">
              <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Lastest Video</h1>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Embeds Page" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/sa4gVB5ZcSQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-sm-5 my-lg-5 bar-title py-2" style={{ backgroundColor: "rgba(253, 197, 0, 0.38)" }}>
            <Image image={ICMatches} height="10vh" className="mr-3" />
            Lastest Matches
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-lg-flex  justify-content-around">
            <MDBCol lg="6" sm="12">
              <TabelMedals data={MedalMatches} />
              <div className="text-center mb-3">
                <MDBBtn type="button" gradient="tempting-azure" className="rounded-pill" alt="150x75" onClick={() => history.push("/medals")}>
                  View Full List
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol lg="6" sm="12">
              <Carousel2
                data={[
                  <MDBView>
                    <MDBCardGroup className="d-lg-flex  justify-content-around ">
                      <MDBCol lg="6" sm="12">
                        <h5>Kategori 1</h5>
                        <TabelMatches data={LastestMatch.kategori_1} />
                      </MDBCol>
                      <MDBCol lg="6" sm="12">
                        <h5>Kategori 2</h5>
                        <TabelMatches data={LastestMatch.kategori_2} />
                      </MDBCol>
                    </MDBCardGroup>
                  </MDBView>,
                  <MDBView>
                    <MDBCardGroup className="d-lg-flex  justify-content-around ">
                      <MDBCol lg="6" sm="12">
                        <h5>Kategori 3</h5>
                        <TabelMatches data={LastestMatch.kategori_3} />
                      </MDBCol>
                      <MDBCol lg="6" sm="12">
                        <h5>Kategori 4</h5>
                        <TabelMatches data={LastestMatch.kategori_4} />
                      </MDBCol>
                    </MDBCardGroup>
                  </MDBView>,
                ]}
                interval={2000}
                onHoverStop={false}
                showControls={false}
                showIndicators={false}
                slide
              />
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-sm-3 my-lg-5 bar-title py-2" style={{ backgroundColor: "rgba(81, 253, 0, 0.38)" }}>
            <Image image={ICUpcoming} height="10vh" className="mr-3" />
            Upcoming Match
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBContainer fluid>
            <Carousel2
              data={[
                <MDBView>
                  <MDBCardGroup className="d-lg-flex  justify-content-around ">
                    <MDBCol lg="6" sm="12">
                      <h5>Kategori 1</h5>
                      <TabelMatches data={UpcomingMatch.kategori_1} upcomingM="true" />
                      <h5>Kategori 2</h5>
                      <TabelMatches data={UpcomingMatch.kategori_2} upcomingM="true" />
                    </MDBCol>
                    <MDBCol lg="6" sm="12">
                      <h5>Kategori 3</h5>
                      <TabelMatches data={UpcomingMatch.kategori_3} upcomingM="true" />
                      <h5>Kategori 4</h5>
                      <TabelMatches data={UpcomingMatch.kategori_4} upcomingM="true" />
                    </MDBCol>
                  </MDBCardGroup>
                </MDBView>,
                <MDBView>
                  <MDBCardGroup className="d-lg-flex  justify-content-around ">
                    <MDBCol lg="6" sm="12">
                      <h5>Kategori 5</h5>
                      <TabelMatches data={UpcomingMatch.kategori_5} upcomingM="true" />
                      <h5>Kategori 6</h5>
                      <TabelMatches data={UpcomingMatch.kategori_6} upcomingM="true" />
                    </MDBCol>
                    <MDBCol lg="6" sm="12">
                      <h5>Kategori 7</h5>
                      <TabelMatches data={UpcomingMatch.kategori_7} upcomingM="true" />
                      <h5>Kategori 8</h5>
                      <TabelMatches data={UpcomingMatch.kategori_8} upcomingM="true" />
                    </MDBCol>
                  </MDBCardGroup>
                </MDBView>,
              ]}
              interval={2000}
              onHoverStop={false}
              showControls={false}
              showIndicators={false}
              slide
            />
          </MDBContainer>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <p className="my-sm-3 my-lg-5 bar-title py-2" style={{ backgroundColor: "#AFE2F5" }}>
            <Image image={ICPhoto} height="10vh" className="mr-3" />
            Photo Galleries
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCardGroup className="d-lg-flex  justify-content-around  mb-5">
            <MDBCol lg="6" sm="12">
              <Link to="/">
                <MDBView hover zoom>
                  <Carousel2
                    data={[
                      <MDBView>
                        <Image image="https://images.unsplash.com/photo-1585537884142-512d204373d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="d-block w-100 img-fluid" alt="First slide" height="50vh" objectFit="contain" />{" "}
                      </MDBView>,
                      <MDBView>
                        <Image image="https://images.unsplash.com/photo-1542937307-6eeb0267cbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="d-block w-100 img-fluid" alt="Second slide" height="50vh" objectFit="contain" />{" "}
                      </MDBView>,
                      <MDBView>
                        <Image image="https://images.unsplash.com/photo-1555597408-26bc8e548a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=796&q=80" className="d-block w-100 img-fluid" alt="Third slide" height="50vh" objectFit="contain" />
                      </MDBView>,
                    ]}
                    interval={2001}
                    onHoverStop={false}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1"
                    slide
                  />
                </MDBView>
              </Link>
            </MDBCol>
            <MDBCol lg="6" sm="12">
              <Link to="/">
                <MDBView hover zoom>
                  <Carousel2
                    data={[
                      <MDBView>
                        <Image image="https://images.unsplash.com/photo-1585537884142-512d204373d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="d-block w-100 img-fluid" alt="First slide" height="50vh" objectFit="contain" />{" "}
                      </MDBView>,
                      <MDBView>
                        <Image image="https://images.unsplash.com/photo-1576149146095-caa19d4de102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" className="d-block w-100 img-fluid" alt="Second slide" height="50vh" objectFit="contain" />
                      </MDBView>,
                      <MDBView>
                        <Image image="https://images.unsplash.com/photo-1585511543150-dc91145bbc77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="d-block w-100 img-fluid" alt="Third slide" height="50vh" objectFit="contain" />{" "}
                      </MDBView>,
                    ]}
                    interval={3001}
                    onHoverStop={false}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1"
                    slide
                  />
                </MDBView>
              </Link>
            </MDBCol>
          </MDBCardGroup>
        </MDBAnimation>
      </div>
    </Fragment>
  );
};

export default Home2;
