/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Header = ({ basePath = '/' }) => {
  console.log('basePath', basePath);
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className='navbar-fixed'>
      <nav className='red'>
        <div className='container'>
          <div className='nav-wrapper'>
            <a href={basePath} className='brand-logo'>
              SSR News
            </a>
            <a
              href='javascript:void(0)'
              onClick={toggleMenu}
              className='sidenav-trigger right'
            >
              <i className='material-icons'>menu</i>
            </a>
            <div
              className='sidenav-overlay'
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul
              id='slide-out'
              className='sidenav'
              style={menuOpen ? stylesOpen : null}
            >
              <li>
                <a className='subheader'>Menu</a>
              </li>
              <li>
                <div className='divider' />
              </li>
              <li>
                <Link to={basePath} className='item' onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/articles/techradar`}
                  className='item'
                  onClick={toggleMenu}
                >
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/articles/mashable`}
                  className='item'
                  onClick={toggleMenu}
                >
                  Mashable
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/articles/the-verge`}
                  className='item'
                  onClick={toggleMenu}
                >
                  The Verge
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/articles/the-next-web`}
                  className='item'
                  onClick={toggleMenu}
                >
                  TNW
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/articles/wired`}
                  className='item'
                  onClick={toggleMenu}
                >
                  Wired
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/articles/recode`}
                  className='item'
                  onClick={toggleMenu}
                >
                  Recode
                </Link>
              </li>
            </ul>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to={`${basePath}/articles/techradar`} className='item'>
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/articles/mashable`} className='item'>
                  Mashable
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/articles/the-verge`} className='item'>
                  The Verge
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/articles/the-next-web`} className='item'>
                  TNW
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/articles/wired`} className='item'>
                  Wired
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/articles/recode`} className='item'>
                  Recode
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;