import React from 'react';

import { Link } from 'react-router-dom';
import './header.css'





const Header = (props) => {


        const logo = () => (
            <Link to="/" className="header-logo">
                <img alt="idriver logo" src="/images/idlogo.svg"/>
            </Link>
        )

        const nav = () => {
            return (
                <div className="nav-links">
                    <button>Jobs</button>
                    <button>Get Social</button>
                    <button>James Keem</button>
                </div>
            )
        }

        const menu = () => (
            <Link to="/" className="menu">
                <img alt="menu" src="/images/menu.svg"/>
            </Link>
        )
    

    return (
        <header >
            <div className="navbar">
                {logo()}
                {nav()}
                <span>Menu</span>
                {menu()}
            </div>
        </header>
    )


}

export default Header;