import React from 'react';
import {Link} from "react-router-dom";
import './sideNav.css'



const SideNavigation = (props) => {


    return (
        <div className="sideNav">
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/user-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/user-black.svg'/>
                <span>Employer Profile</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/car-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/car.svg'/>  
                <span>Onboard Your Vehicles</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/search-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/search-black.svg'/>
                <span>Search and Hire Drivers</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/envelope-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/envelope-black.svg'/>
                <span>Inbox</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/brief-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/brief-black.svg'/>
                <span>Recruitment</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/chart-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/chart-black.svg'/>
                <span>My Organisations</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/star-black.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/star-white.svg'/>
                <span>Rate A Driver</span>
            </Link>
            <Link to="/" className="user-icon">
                <img alt="userIcon" class="white" src='/images/icons/subscription-white.svg'/>
                <img alt="userIcon" class="black" src='/images/icons/subscription-black.svg'/>
                <span>My Subscription</span>
            </Link>
            
        </div>
    )
}

export default SideNavigation;