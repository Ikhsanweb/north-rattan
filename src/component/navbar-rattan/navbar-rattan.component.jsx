import { Fragment, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar-rattan.styles.scss';
import { FiMenu } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { NRWLogo } from '../../constants/image';

const NavbarRattan = () => {
  const [isNextNavClicked, setIsNextNavClicked] = useState(true);
  const [changeScroll, setChangeScroll] = useState(true);

  const changeNavbarColor = () => {
    if (window.scrollY >= 370) {
      setChangeScroll(true);
    } else {
      setChangeScroll(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener('scroll', changeNavbarColor);
  }, [changeScroll]);

  return (
    <Fragment>
      <div
        className={
          changeScroll
            ? 'navbar-rattan-container'
            : 'navbar-rattan-container change-scroll'
        }
      >
        <a className="navbar-rattan-logo" href="#about">
          <div
            // className="logo-container"
            className={
              changeScroll ? 'logo-container' : 'logo-container change-scroll'
            }
          >
            <img
              src={NRWLogo}
              alt="North Rattan"
              // className={changeScroll ? 'logo-img' : 'logo-img change-logo'}
              className="logo-img"
            />
            <span>North Rattan</span>
          </div>
        </a>
        <div className="nav-rattan-links">
          <a className="nav-rattan-link" href="#about">
            ABOUT
          </a>
          <a className="nav-rattan-link" href="#products">
            PRODUCT
          </a>
          <a className="nav-rattan-link" href="#contacts">
            CONTACTS
          </a>
        </div>
        <div className="navbar-rattan-menu">
          <FiMenu
            onClick={() => setIsNextNavClicked(!isNextNavClicked)}
            // className="navbar-rattan-menu-icon"
            // className={
            //   changeScroll === true
            //     ? 'navbar-rattan-menu-icon'
            //     : changeScroll === false
            //     ? 'navbar-rattan-menu-icon change-scroll'
            //     : changeScroll === true && isNextNavClicked === false
            //     ? 'navbar-rattan-menu-icon change-scroll menufalse'
            //     : 'navbar-rattan-menu-icon change-scroll'
            // }

            className={
              changeScroll === false && isNextNavClicked === true
                ? 'navbar-rattan-menu-icon change-scroll'
                : 'navbar-rattan-menu-icon'
            }
          />
        </div>
        <div
          className={
            isNextNavClicked
              ? 'navbar-rattan-responsive-menu'
              : 'navbar-rattan-responsive-menu menufalse'
          }
        >
          <ul>
            <li>
              <a
                onClick={() => setIsNextNavClicked(!isNextNavClicked)}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsNextNavClicked(!isNextNavClicked)}
                href="#products"
              >
                Products
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsNextNavClicked(!isNextNavClicked)}
                href="#contacts"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wa-button">
        <a href="https://wa.me/0812650469760">
          <IoLogoWhatsapp />
        </a>
      </div>
      <Outlet />
      <div className="footer-section">
        <div className="footer-section-content">
          <div className="footer-image-container">
            <img src={NRWLogo} alt="" />
          </div>
          <div className="footer-text">{/* <h5>Find more</h5> */}</div>
          <span className="footer-section-end">
            North Rattan 2023. All rights reserved
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarRattan;
