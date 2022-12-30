import { Fragment, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar-rattan.styles.scss';
import { FiMenu } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import {
  NRLogo,
  NRLogoBasic,
  NRLogoWhite,
  NRWLogo,
} from '../../constants/image';

const NavbarRattan = () => {
  const [isNextNavClicked, setIsNextNavClicked] = useState(true);
  const [changeScroll, setChangeScroll] = useState(true);

  const changeNavbarColor = () => {
    if (window.scrollY >= 70) {
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
        <Link className="navbar-rattan-logo" to="/">
          {/* <h1
            className={changeScroll ? 'logo-rattan' : 'logo-rattan change-logo'}
          >
            North Rattan
          </h1> */}
          {/* <h1 className="logo">Rattan</h1> */}
          <img
            src={NRWLogo}
            alt="North Rattan"
            // className={changeScroll ? 'logo-img' : 'logo-img change-logo'}
            className="logo-img"
          />
        </Link>
        <div className="nav-rattan-links">
          <Link className="nav-rattan-link" to="/auth">
            ABOUT US
          </Link>
          <Link className="nav-rattan-link" to="/auth">
            PRODUCT
          </Link>
          <Link className="nav-rattan-link" to="/auth">
            CONTACTS
          </Link>
        </div>
        <div className="navbar-rattan-menu">
          <FiMenu
            onClick={() => setIsNextNavClicked(!isNextNavClicked)}
            className="navbar-rattan-menu-icon"
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
