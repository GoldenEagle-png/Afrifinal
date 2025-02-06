import React from 'react';
import { BsGrid1X2Fill,  BsPower, BsImage, BsCurrencyDollar, BsGear } from 'react-icons/bs';
import { Link } from "react-router-dom";
import '../css/Dashboard.css';

function SideBar() {
    return (
        <div id='sidebar'>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/dashboard">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link className="no-underline" to="/image-library">
                        <BsImage className='icon' /> Image Library
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link className="no-underline" to="/upload-image">
                        <BsImage className='icon' /> Upload Image
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link className="no-underline" to="/search-images">
                        <BsImage className='icon' /> Search Images
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link className="no-underline" to="http://localhost:63343/Stock-Images/src/assets/html/aseet%20main/pricing.html?_ijt=d0fl8op4aad08m00iv08u1avd8&_ij_reload=RELOAD_ON_SAVE">
                        <BsCurrencyDollar className='icon' /> Pricing
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link className="no-underline" to="/account-settings">
                        <BsGear className='icon' /> Account Settings
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link className="no-underline" to="/">
                        <BsPower className='icon' /> Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;