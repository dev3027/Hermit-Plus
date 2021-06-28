import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/HermitPlusLogo.png';

const Nav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='hermit craft' />
      </div>
      <div className='signup-button'>
        <Link>
          <h3>Sign Up</h3>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
        </ul>
      </nav>

      <div className='mobile'>
        <div className='bar bar-1'></div>
        <div className='bar bar-2'></div>
        <div className='bar bar-3'></div>
      </div>
    </header>
  );
};

export default Nav;
