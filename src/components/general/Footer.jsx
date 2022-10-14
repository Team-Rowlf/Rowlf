import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = () => {
  const location = useLocation();

  return (
    <div className="bottom">
      <div className="spacer"></div>
      <div className="footer">
        <div className="footer-upper">
          <div className="address">
            <h5 className="title-card">Address</h5>
            <p className="text">
              1234 Chef Kiss Ln.
              <br />
              San Diego, CA 99999
            </p>
          </div>
          <div className="phone">
            <h5 className="title-card">Phone</h5>
            <p className="text">
              Office : +1 619 867 5309 <br />
              Fax : +1 678 999 8212
            </p>
          </div>
          <div className="email">
            <h5 className="title-card">Email</h5>
            <p className="text">
              support@hellokitchen.com
              <br />
              Site:support@hellokitchen.com
            </p>
          </div>
          <div className="social">
            <h5 className="title-card">Social</h5>
            <div className="social-media">
              <a href="#" className="fa fa-google"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-instagram"></a>
            </div>
          </div>
        </div>
        <div className="footer-lower">
            <div className="col">
              <hr/>
            </div>
          <div className="media-container-row">
                <span className="footer-menu-item">
                  {' '}
                  <a href="/">Home</a>{' '}
                </span>
                <span className="footer-menu__item">
                  {' '}
                  <a href="/about">About</a>
                </span>
                <span className="footer-menu__item">
                  {' '}
                  <a href="">Contact</a>
                </span>
                <span className="footer-menu__item">
                  {' '}
                  <a href="">Services</a>
                </span>
                <span className="footer-menu__item">
                  {' '}
                  <a href="">Careers</a>
                </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
