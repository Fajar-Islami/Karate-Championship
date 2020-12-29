import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router";

import "./style.scss";
import { MDBBtn, MDBCardGroup, MDBCol, MDBContainer, MDBAnimation, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import { TabelMedalsHome, TabelMatchesHome, Card, Carousel } from "../../components";
import { ICNews, ICMatches, ICUpcoming, ICPhoto, ICVideo } from "../../assets";
import { MedalMatches, LastestMatch, UpcomingMatch } from "./data";

const Home2 = () => {
  const history = useHistory();

  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Home`;
  });
  const ImgHeader = (img, tinggi = "70px") => {
    return (
      <img src={img} style={{ height: tinggi }} className='mr-1 img-fluid' alt='Lastest Matches' />
    );
  };

  return (
    <Fragment>
      <div className='home-2'>
        <div className='top'>
          <h1>Buka Kerjunas Lemkari 2019</h1>
          <div className='top-kiri'>
            <h3>
              Menpora Harap Ajang ini Digelar Rutin untuk Mencari Bibit Atlet Berprestasi. Segera
              Daftarkan Atlet-atlet Anda
            </h3>
            <Link className='btn-regis pb-1 px-3  ' to='/registration'>
              <span>Registration</span>
            </Link>
          </div>
          <div className='top-kanan'></div>
        </div>

        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md='3'>
              <MDBCardGroup className='d-lg-flex  justify-content-around mt-5 bar-title'>
                <TabelMedalsHome data={MedalMatches} />
                <div className='text-center mb-3'>
                  <MDBBtn
                    type='button'
                    color='cyan'
                    className='rounded-pill'
                    alt='150x75'
                    onClick={() => history.push("/medals")}
                  >
                    View Full List
                  </MDBBtn>
                </div>
              </MDBCardGroup>

              <MDBAnimation reveal type='fadeInUp'>
                <div
                  className='mt-1 mb-3 bar-title py-2'
                  style={{
                    backgroundColor: "rgba(81, 253, 0, 0.38)",
                    fontSize: "27px",
                  }}
                >
                  {ImgHeader(ICMatches, "50px")}
                  <span>Lastest Matches</span>
                </div>

                <h4 style={{ fontWeight: "600" }}> Selasa, 3 September 2019</h4>
                <p>Tatami 1 : Tahap 1 - Male, kumite -61 kg junior</p>
                <TabelMatchesHome data={LastestMatch.kategori_1} upcomingM={true} />
                <p>Tatami 2 : Tahap 1 - Male, kumite -68 kg junior</p>
                <TabelMatchesHome data={LastestMatch.kategori_2} upcomingM={true} />
                <div className='text-center mb-3'>
                  <MDBBtn
                    type='button'
                    color='cyan'
                    className='rounded-pill'
                    alt='150x75'
                    onClick={() => history.push("/schedulesResult")}
                  >
                    View Full List
                  </MDBBtn>
                </div>
              </MDBAnimation>

              <MDBAnimation reveal type='fadeInUp'>
                <div
                  className='mt-1 mb-3 bar-title py-2'
                  style={{
                    backgroundColor: "rgba(81, 253, 0, 0.38)",
                    fontSize: "27px",
                  }}
                >
                  {ImgHeader(ICUpcoming, "50px")}
                  <span>Upcoming Match</span>
                </div>
                <h4 style={{ fontWeight: "600" }}> Selasa, 4 September 2019</h4>
                <p>Tatami 1 : Tahap 1 - Male, kumite -61 kg junior</p>
                <TabelMatchesHome data={UpcomingMatch.kategori_1} />
                <p>Tatami 2 : Tahap 1 - Male, kumite -68 kg junior</p>
                <TabelMatchesHome data={UpcomingMatch.kategori_2} />
                <div className='text-center mb-3'>
                  <MDBBtn
                    type='button'
                    color='cyan'
                    className='rounded-pill'
                    alt='150x75'
                    onClick={() => history.push("/schedulesResult")}
                  >
                    View Full List
                  </MDBBtn>
                </div>
              </MDBAnimation>
            </MDBCol>

            <MDBCol md='9'>
              <MDBAnimation reveal type='fadeInUp'>
                <p
                  className='my-sm-3 my-lg-5 bar-title py-2'
                  style={{ backgroundColor: "rgba(102, 199, 235, 0.52)" }}
                >
                  {ImgHeader(ICNews)}
                  Lastest News
                </p>
              </MDBAnimation>
              <MDBAnimation reveal type='fadeInUp'>
                <MDBCardGroup className='d-lg-flex  justify-content-around'>
                  <MDBCol lg='6' sm='12' className='mb-lg-0 mb-4 '>
                    <Card
                      title='Berita 1'
                      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor est, fringilla. '
                      img='https://images.unsplash.com/photo-1576149146095-caa19d4de102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
                    />
                  </MDBCol>
                  <MDBCol lg='6' sm='12' className='mb-lg-0 mb-4'>
                    <Card
                      title='Berita 2'
                      body='Sed pharetra vestibulum porttitor. Vivamus vitae dui eu quam vehicula faucibus. Curabitur.  '
                      img='https://images.unsplash.com/photo-1585537884142-512d204373d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    />
                  </MDBCol>
                </MDBCardGroup>
              </MDBAnimation>

              <MDBAnimation reveal type='fadeInUp'>
                <p
                  className='my-3 bar-title py-2'
                  style={{ backgroundColor: "rgba(102, 199, 235, 0.52)" }}
                >
                  {ImgHeader(ICPhoto)}
                  Photo Galleries
                </p>
              </MDBAnimation>
              <MDBAnimation reveal type='fadeInUp'>
                <MDBCardGroup className='d-lg-flex  justify-content-around  mb-5'>
                  <Carousel
                    img={[
                      "https://images.unsplash.com/photo-1555597408-26bc8e548a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=796&q=80",
                      "https://images.unsplash.com/photo-1542937307-6eeb0267cbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    ]}
                    alt='Carousel Photo'
                    style={{
                      height: "600px",
                      width: "1100px",
                    }}
                  />
                </MDBCardGroup>
              </MDBAnimation>

              <MDBAnimation reveal type='fadeInUp'>
                <p
                  className='my-3 bar-title py-2'
                  style={{ backgroundColor: "rgba(102, 199, 235, 0.52)" }}
                >
                  {ImgHeader(ICVideo)}
                  Video's
                </p>
              </MDBAnimation>
              <MDBAnimation reveal type='fadeInUp'>
                <MDBCardGroup className='d-lg-flex  justify-content-around '>
                  <MDBCol lg='6' sm='12'>
                    <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Live Stream Now !!</h1>
                    <div className='embed-responsive embed-responsive-16by9'>
                      <iframe
                        title='Embeds Page'
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/w9kxtJpRmw4'
                        frameBorder='0'
                        className='embed-responsive-item'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </div>
                  </MDBCol>
                  <MDBCol lg='6' sm='12'>
                    <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Lastest Video</h1>
                    <div className='embed-responsive embed-responsive-16by9'>
                      <iframe
                        title='Embeds Page'
                        className='embed-responsive-item'
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/sa4gVB5ZcSQ'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </div>
                  </MDBCol>
                </MDBCardGroup>
              </MDBAnimation>
              {/* <MDBCol lg='6' sm='12'>
                    <Link to='/'>
                      <MDBView hover zoom>
                        <Carousel2
                          data={[
                            <MDBView>
                              <Image
                                image='https://images.unsplash.com/photo-1585537884142-512d204373d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                                className='d-block w-100 img-fluid'
                                alt='First slide'
                                height='50vh'
                                objectFit='contain'
                              />{' '}
                            </MDBView>,
                            <MDBView>
                              <Image
                                image='https://images.unsplash.com/photo-1542937307-6eeb0267cbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                className='d-block w-100 img-fluid'
                                alt='Second slide'
                                height='50vh'
                                objectFit='contain'
                              />{' '}
                            </MDBView>,
                            <MDBView>
                              <Image
                                image='https://images.unsplash.com/photo-1555597408-26bc8e548a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=796&q=80'
                                className='d-block w-100 img-fluid'
                                alt='Third slide'
                                height='50vh'
                                objectFit='contain'
                              />
                            </MDBView>,
                          ]}
                          interval={2001}
                          onHoverStop={false}
                          showControls={false}
                          showIndicators={false}
                          className='z-depth-1'
                          slide
                        />
                      </MDBView>
                    </Link>
                  </MDBCol>
                  <MDBCol lg='6' sm='12'>
                    <Link to='/'>
                      <MDBView hover zoom>
                        <Carousel2
                          data={[
                            <MDBView>
                              <Image
                                image='https://images.unsplash.com/photo-1585537884142-512d204373d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                                className='d-block w-100 img-fluid'
                                alt='First slide'
                                height='50vh'
                                objectFit='contain'
                              />{' '}
                            </MDBView>,
                            <MDBView>
                              <Image
                                image='https://images.unsplash.com/photo-1576149146095-caa19d4de102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
                                className='d-block w-100 img-fluid'
                                alt='Second slide'
                                height='50vh'
                                objectFit='contain'
                              />
                            </MDBView>,
                            <MDBView>
                              <Image
                                image='https://images.unsplash.com/photo-1585511543150-dc91145bbc77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                className='d-block w-100 img-fluid'
                                alt='Third slide'
                                height='50vh'
                                objectFit='contain'
                              />{' '}
                            </MDBView>,
                          ]}
                          interval={3001}
                          onHoverStop={false}
                          showControls={false}
                          showIndicators={false}
                          className='z-depth-1'
                          slide
                        />
                      </MDBView>
                    </Link>
                  </MDBCol> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Fragment>
  );
};

export default Home2;
