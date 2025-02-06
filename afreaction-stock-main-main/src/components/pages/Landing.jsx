import '../../css/HomePage.css';
import Navbar from "../Navbar";
import ImageGallery from "../ImageGallery";
import SliderTab from "../SliderTab";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from '../auth/Footer';
import PaginatedImageGallery from '../PaginatedImageGallery';
import { Search } from 'lucide-react';


const Landing = () => {
  const [SearchQuery, setSearchQuery] = useState('');

  const tags = [
    "music", "wallpaper", "black background",
    "lunar new year", "valentines", "mountains",
    "2025", "cartoon", "birds"
  ];

  return (
    <div className='HomePage'>
      <div className="hero-section">
        <Navbar defaultQuery='' />
        <div className='hero-banner'>
          <h2>Unleash Creativity, Share Moments.</h2>
          <form className="search-form" action={SearchQuery ? `/search?query=${SearchQuery}` : "#"} method='get'>
            <div className="search-container">
              <Search className='search-icon' />
              <input
                type="text"
                value={SearchQuery}
                placeholder='Search for free Images, Videos, Music & more'
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <select name="search-type" id="search-type" className="search-select">
                <option value="images">Images</option>
                <option value="videos">Videos</option>
              </select>
              <button className='submit-btn' type="submit"></button>
            </div>
          </form>
          <div className="suggestion-tags">
            {tags.map((tag, index) => (
              <div key={index} className="suggestion-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='container'>
        <SliderTab />
        <PaginatedImageGallery query="nature" />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
