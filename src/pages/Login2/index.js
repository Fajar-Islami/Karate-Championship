import React from "react";
import { MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBBtn, MDBInput, MDBContainer, MDBJumbotron, MDBCardBody, MDBCardText } from "mdbreact";
import "./style.scss";

import { BgLogin2 } from "../../assets";
const Login2 = () => {
  return (
    <div className="login2">
      <div className="login-kiri">
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <MDBCardBody>
                  <MDBCardTitle className="h2">Material Design for Bootstrap</MDBCardTitle>
                  <p className="blue-text my-4 font-weight-bold">Powerful and free Material Design UI KIT</p>
                  <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.</MDBCardText>
                  <hr className="my-4" />
                  <div className="pt-2">
                    <MDBBtn color="primary" className="waves-effect">
                      Buy now <MDBIcon far icon="gem" />
                    </MDBBtn>
                    <MDBBtn outline color="primary" className="waves-effect">
                      Download <MDBIcon icon="download" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="login-kanan">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                  <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                  <MDBInput label="Type your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                  <MDBBtn>Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Login2;
