import React, { Fragment } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
} from 'mdbreact';
import { IMGBSP, IMGForki } from '../../assets';
import { Link } from 'react-router-dom';
import { Image } from '..';
import './index.scss';

const Footer = () => {
  return (
    <Fragment>
      <MDBAnimation reveal type='fadeInUp'>
        <h4 className='d-flex justify-content-center pt-3'>Official Partner</h4>
        <hr />
        <div className='d-flex justify-content-center'>
          <Image image={IMGBSP} height='60px' title='BSP' className='mr-3' />
          <Image image={IMGForki} height='65px' title='Forki' />
        </div>

        <MDBFooter className='footer-color font-small pt-4 mt-4'>
          <MDBContainer fluid className=' text-left'>
            <MDBRow>
              <MDBCol md='2'>
                <h5 className='title'>Generals</h5>
                <ul>
                  <li className='list-unstyled'>
                    <Link to='/'>K-champ</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/Registration'>Registration</Link>
                  </li>
                  <li className='list-unstyled'>
                    <a href='/Login'>Login</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md='3'>
                <h5 className='title'>Informations</h5>
                <ul>
                  <li className='list-unstyled'>
                    <Link to='/'>Time and Place</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/'>Classes Contested</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/'>General Provisions</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/'>Hotel and Resort</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/'>Foods</Link>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md='2'>
                <h5 className='title'>News</h5>
                <ul>
                  <li className='list-unstyled'>
                    <Link to='/news'>News</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/photos'>Photos</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/videos'>Video</Link>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md='3'>
                <h5 className='title'>Results</h5>
                <ul>
                  <li className='list-unstyled'>
                    <Link to='/schedulesResult'>Schedules and Result</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/teams'>Teams</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/categories'>Categories</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/statistic'>Statistics</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/medals'>Medals</Link>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/bracket'>Bracket</Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <h6>Downloads</h6>
            <h6>
              <a href=''>Proposal Indonesia</a> |{' '}
              <a href=''>Proposal English</a> | <a href=''>Manual Guide</a>
            </h6>
          </MDBContainer>
          <div className='footer-copyright text-center py-2'>
            <MDBContainer fluid>
              All Right Reserved <Link to='/'>Brilyan Sport Technology </Link>{' '}
              &copy; {new Date().getFullYear()}
            </MDBContainer>
          </div>
        </MDBFooter>
      </MDBAnimation>
    </Fragment>
  );
};

export default Footer;
