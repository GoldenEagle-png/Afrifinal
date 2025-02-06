import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import authorImage from 'assets/img/product/plants.png';
import image1 from 'assets/img/product/images-deatils.jpg';
import teamImage1 from 'assets/img/team/teamn1.jpg';

const PhotoDetailsPage = () => {
    const handleDownload = () => {
        // Implement download functionality
    };

    const handleShare = (platform) => {
        // Implement social media sharing functionality
    };

    return (
        <div className="breadcumnd__bannerattach ralt">
            {/* Header Section */}
            <header className="header-section header__sectiontheme">
                {/* Header content */}
            </header>

            {/* Photo Details Section */}
            <div className="images__detialswrap pt-60 pb-120">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="img__thumbdetails">
                                <img src={image1} className="w-100 mb-30" alt="img" />
                                <h4 className="title tites__head mb-30">
                                    Free photo group of elephants under the big green tree in the wilderness, big green tree in the wilderness
                                </h4>
                                <div className="d-flex image__flexing mb-60">
                                    <div className="imgae__autor d-flex align-items-center">
                                        <img src={authorImage} className="autor round50" alt="img" />
                                        <Link to="/author-page" className="content">
                      <span className="fz-16 d-block fw-500 title">
                        By: Plants Bay
                      </span>
                                            <span className="fz-14 ftext">
                        60k assets
                      </span>
                                        </Link>
                                        <a href="#" className="follow">
                                            Follow
                                        </a>
                                    </div>
                                    <ul className="social d-flex align-items-center">
                                        <li className="fz-16 fw-500 fbase">
                                            Share:
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleShare('facebook')}>
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleShare('twitter')}>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleShare('youtube')}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Related tags and other content */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="image__details__sidebar">
                                {/* Sidebar content */}
                                <a href="#" className="cmn--btn d-flex gap-3 justify-content-center align-items-center" download onClick={handleDownload}>
                  <span>
                    Download Now
                  </span>
                                    <span>
                    <i className="material-symbols-outlined">
                      cloud_download
                    </i>
                  </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* "You might also like" section */}
            <section className="team__section">
                <div className="container">
                    <div className="common__head mb-50 d-flex align-items-center flex-wrap">
                        <h2 className="title">
                            You might also like
                        </h2>
                    </div>
                </div>
                <Carousel
                    className="team__wrap owl-theme owl-carousel"
                    loop
                    autoplay
                    items={5}
                    margin={30}
                    responsive={{
                        0: { items: 1 },
                        767: { items: 2 },
                        991: { items: 3 },
                        1200: { items: 4 },
                        1400: { items: 5 },
                    }}
                >
                    <div className="team__item ralt">
                        <img src={teamImage1} alt="img" />
                        <div className="team__content">
                            <h4 className="white fw-700 mb-16">
                                Thiemer mann
                            </h4>
                        </div>
                    </div>
                    {/* Add more team items */}
                </Carousel>
            </section>

            {/* Trending Collections section */}
            <section className="tranding__section bgwhite pt-120 pb-130">
                <div className="container">
                    <div className="common__head mb-50 d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <h2 className="title">
                            Trending <span className="gratext">Collections</span> To Boost Your Ideas
                        </h2>
                        <Link to="/pricing" className="new__btn">
              <span>
                View Collections
              </span>
                            <i className="material-symbols-outlined">
                                arrow_right_alt
                            </i>
                        </Link>
                    </div>
                    {/* Trending collections content */}
                </div>
            </section>
        </div>
    );
};

export default PhotoDetailsPage;