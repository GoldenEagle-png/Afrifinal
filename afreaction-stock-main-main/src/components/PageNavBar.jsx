import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/PageNavBar.css";
import ExploreDropdown from "./ExploreDropdown";
import PricingDropdown from "./PricingDropdown";
import logo from "../assets/logo-5.png";

const PageNavBar = () => {
    const ref = useRef(null);
    const [isExploreDropdownVisible, setExploreDropdownVisible] = useState(false);
    const [isPricingDropdownVisible, setPricingDropdownVisible] = useState(false);
    const [SearchQuery, setSearchQuery] = useState('');
    const toggleExploreDropdown = () => setExploreDropdownVisible(!isExploreDropdownVisible);
    const togglePricingDropdown = () => setPricingDropdownVisible(!isPricingDropdownVisible);


    return (
        <>
            <div className='PageNavbar' ref={ref}>
                <Link to="/Stock-Images">
                    <img src={logo} alt="Logo" width="100" height="100" />
                </Link>
                <form className="search-form" action={SearchQuery ? `/search?query=${SearchQuery}` : "#"} method='get' >
                    <Link to={SearchQuery ? `/Stock-Images/search?query=${SearchQuery}` : "#"}>
                        <svg className='search-btn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                        <button className='submit-btn' type="submit"></button>
                    </Link>
                    <input type="text" value={SearchQuery} placeholder='Search Afrimax' onChange={(e) => setSearchQuery(e.target.value)} />
                    <select name="search-type" id="search-type">
                        <option value="images">Images</option>
                        <option value="videos">Videos</option>
                    </select>
                </form>
                <div>
                    <button className="nav-btn" onClick={toggleExploreDropdown}>
                        Explore
                    </button>
                    <button className="nav-btn" onClick={togglePricingDropdown}>
                        Pricing
                    </button>
                    <Link to="/Login">
                        <button className="login-btn">Upload</button>
                    </Link>

                </div>
            </div>

            {isExploreDropdownVisible && <ExploreDropdown onClose={toggleExploreDropdown} />}

            {isPricingDropdownVisible && <PricingDropdown onClose={togglePricingDropdown} />}
        </>
    );
};

export default PageNavBar;
