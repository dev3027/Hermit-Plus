import React from 'react';
import hermitLogo from '../images/HermitPlusLogo.png';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='logo-footer'>
          <img src={hermitLogo} alt='Hermit Craft Logo' />
        </div>
        <div className='info-footer'>
          <ul>
            <li>
              <h4>Help</h4>
            </li>
            <li>
              <h4>About</h4>
            </li>
            <li>
              <h4>Donate</h4>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Terms of Service</h4>
            </li>
            <li>
              <h4>Get Involved</h4>
            </li>
            <li>
              <h4>&copy; copyright 2021</h4>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
