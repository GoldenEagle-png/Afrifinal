import React from "react";
import { Link } from "react-router-dom";
import "../../assets/assets/css/main.css";
import "../../assets/assets/css/bootstrap.min.css";
// import ScriptLoader from "../util/ScriptLoader";

const Footer = () => {
  return (
    <footer className="footer__section ralt overhid">
      <div className="footer__top__social">
        <div className="container">
          <div className="footer__top__social-inner d-flex align-items-right">
            <div className="footer__infowrap d-flex align-items-center">
              <div className="footer-info align-self-center">
                <p className="fz-16 fw-400 bodyfont mb-10 white">free photos</p>
                <h5 className="fz-20 fw-700 bodyfont white">141.183</h5>
              </div>
              <div className="footer-info align-self-center">
                <p className="fz-16 fw-400 bodyfont mb-10 white">Total downloads</p>
                <h5 className="fz-20 fw-700 bodyfont white">27.39 M</h5>
              </div>
              <div className="footer-info align-self-center">
                <p className="fz-16 fw-400 bodyfont mb-10 white">Total members</p>
                <h5 className="fz-20 fw-700 bodyfont white">104.743</h5>
              </div>
              <ul className="footer-social d-flex align-items-center">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer__top pt-90 pb-90">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__item">
                <div className="footer__title fz-20 fw-700 bodyfont text-white mb-20 d-block">
                  
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__item">
                <div className="footer__title fz-20 fw-700 bodyfont text-white mb-20 d-block">
                  Helps And Faq
                </div>
                <ul className="quick__link">
                  <li>
                    <Link to="/Stock-Images/login" className="fz-16 fw-400 bodyfont ftext d-block">
                      My account
                    </Link>
                  </li>
              
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__item">
                <div className="footer__title fz-20 fw-700 bodyfont text-white mb-20 d-block">
                  Meet Afreation Team
                </div>
                <ul className="quick__link">
                  <li>
                    <Link to="/about" className="fz-16 fw-400 bodyfont ftext d-block">
                      About Afreation
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="fz-16 fw-400 bodyfont ftext d-block">
                      Privacy Policy
                    </Link>
                  </li>
  
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__item">
                <div className="footer__title fz-20 fw-700 bodyfont text-white mb-20 d-block">
                  Subscribe With Us
                </div>
                <form action="#0" className="subscribe__form">
                  <input type="email" placeholder="Email address" />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ScriptLoader src="/js/jquery-3.7.0.min.js" /> */}
      {/* <ScriptLoader src="/js/viewport.jquery.js" /> */}
      {/* <ScriptLoader src="/js/plugin.js" /> */}
      {/* <ScriptLoader src="/js/main.js" /> */}
    </footer>
  );
};

export default Footer;
