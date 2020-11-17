import React, { useState } from 'react';
import './style.scss';
import Burger from './Burger';
import { IMGLemkari } from '../../assets';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className={navbar ? 'nav-f sticky' : 'nav-f'}>
        <div
          className='kiri'
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}
          title='Lemakri'>
          <img src={IMGLemkari} alt='Lemkari' />
          <span> Lemkari Kerjunas 2019</span>
        </div>
        <Burger />
      </div>
    </>
  );
};

export default Header;
