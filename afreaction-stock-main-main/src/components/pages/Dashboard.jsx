import React from 'react';
import SideBar from '../SideBar';
// import HomeNavbar from '../HomeNavBar';
import PaginatedImageGallery from '../PaginatedImageGallery';
import {BsJustify} from "react-icons/bs";

const Dashboard = () => {
    return (
        <div className="grid-container">
            <SideBar />
            <header className='header'>
                <div className='menu-icon'>
                    <BsJustify className='icon' />
                </div>
                <div className='sidebar-brand'>
                    <img alt="Logo" className="sidebar-logo" src="../../assets/logo-.png" />
                </div>
                <div className='search-container'>
                    <input type='text' className='search-input' placeholder='Search...' />
                </div>
            </header>
            <div className="main-container">
                {/*<HomeNavbar />*/}
                <PaginatedImageGallery />
            </div>
        </div>
    );
};

export default Dashboard;