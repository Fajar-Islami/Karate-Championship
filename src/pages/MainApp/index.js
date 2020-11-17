import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Header } from '../../components';
import './mainApp.scss';
import { RoutesMainApp, ScrollToTop } from '../../config';
const MainApp = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='header-m '>
        <Header/>
      </div>
      <RoutesMainApp />
      <div className='footer-m'>
        <Footer />
      </div>
    </Router>
  );
};

export default MainApp;
