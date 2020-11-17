import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBContainer,
} from 'mdbreact';
import './style.scss';

import { SignIn2 } from '../../assets';
import { Link } from 'react-router-dom';

const SignIn = () => {
  useEffect(() => {
    document.body.className = 'bg-sign';
    document.title = `Sign In`;

    return () => {
      document.body.className = '';
    };
  }, []);
  return (
    <MDBContainer fluid className='card-sign'>
      <MDBRow center>
        <MDBCol lg='11'>
          <MDBCard>
            <MDBCol lg='7'>
              <MDBCardImage
                className='img-fluid'
                src={SignIn2}
                waves
                alt='Sign In'
              />
            </MDBCol>
            <MDBCol lg='5'>
              <form>
                <h1 className=' text-center mb-4 title'>Sign in</h1>
                <h2 className=' text-center mb-4 '>to Manage Your Athletes</h2>

                <div className='mt-5 grey-text col-lg-10 mx-auto'>
                  <MDBInput
                    label='Type your email'
                    icon='envelope'
                    group
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <MDBInput
                    label='Type your password'
                    icon='lock'
                    group
                    type='password'
                    validate
                  />
                </div>
                <div className='text-center'>
                  <MDBBtn
                    type='button'
                    className='mt-0 button-signIn rounded-pill'
                    alt='Sign In'>
                    Sign in
                  </MDBBtn>
                </div>
              </form>
              <Link
                to='/forgotpassword'
                className='font-small pt-4 grey-text d-flex justify-content-center t-muted'>
                Forgot Password ?
              </Link>
              <span className='font-small pt-4 grey-text d-flex justify-content-center'>
                Dont have account?{' '}
                <Link to='/registration' className='ml-1 grey-text t-muted'>
                  Register Here
                </Link>
              </span>
              <span className='font-small pb-4  grey-text d-flex justify-content-center'>
                <Link to='/' className='ml-1 grey-text t-muted'>
                  Back to home
                </Link>
              </span>
            </MDBCol>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;
