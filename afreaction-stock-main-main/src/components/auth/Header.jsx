// Header.js
import React from "react";
import { Link } from "react-router-dom"; // Use this if using React Router
import "../../assets/assets/css/main.css";
import "../../assets/assets/css/Header.css";
import logo from '../../assets/logo-5.png';


const Header = () => {
  return (
    <header className="site-header py-3 shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
        <Link to="/Stock-Images">
            <img src={logo} alt="Logo" width="120" height="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Stock-Images"
                  id="homeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </Link>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li>
                    <Link className="dropdown-item" to="/index.html">
                      Photography Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/index-3.html">
                      Video Marketplace
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/about.html">
                  About Us
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Stock-Images"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                  <li>
                    <Link className="dropdown-item" to="/categoris-images.html">
                      Afreation Photo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/natural-video.html">
                      Afreation Video
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Stock-Images"
                  id="pagesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about.html">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/author-page.html">
                      Author
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pricing.html">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoris-images.html">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo-details.html">
                      Photo Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/video-details.html">
                      Video Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop.html">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop-details.html">
                      Shop Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login.html">
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/create-account.html">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/help.html">
                      Help
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact.html">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="d-flex align-items-center ms-lg-3">
              <Link className="btn btn-outline-primary me-3" to="/shop.html">
                <i className="material-symbols-outlined">shopping_cart</i>
              </Link>
              <Link className="btn btn-primary" to="/">
                SignOut <i className="material-symbols-outlined ms-1">logout</i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
