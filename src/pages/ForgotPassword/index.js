import React, { useEffect } from "react";
import { MDBBtn, MDBCard, MDBCardImage, MDBCol, MDBRow, MDBInput, MDBContainer } from "mdbreact";

import { SignIn2, ForgotPW } from "../../assets";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  useEffect(() => {
    document.body.className = "bg-sign";
    document.title = `Forgot Password`;

    return () => {
      document.body.className = "";
    };
  }, []);
  return (
    <MDBContainer fluid className="card-sign">
      <MDBRow center>
        <MDBCol lg="10">
          <MDBCard>
            <MDBCol lg="7">
              <MDBCardImage className="img-fluid p-5 ml-5" style={{ width: "90%" }} src={ForgotPW} waves alt="Send me an email" />
            </MDBCol>
            <MDBCol lg="5">
              <form>
                <h1 className=" text-center mb-4 title">Forgot Password</h1>
                <h6 className=" grey-text text-center  col-lg-10 mx-auto ">Forgot your password? Please enter your email adress bellow. You will receive a link to create new password vie email</h6>

                <div className="mt-5 grey-text col-lg-10 mx-auto">
                  <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                </div>
                <div className="text-center">
                  <MDBBtn type="button" className="button-signIn rounded-pill" alt="Send me an email">
                    Send me an email
                  </MDBBtn>
                </div>
              </form>
              <Link to="/signin" className="font-small pt-4 grey-text d-flex justify-content-center t-muted">
                Back to Sign In
              </Link>
            </MDBCol>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ForgotPassword;
