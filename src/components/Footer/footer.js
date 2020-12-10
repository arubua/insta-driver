import React from 'react';

import { Link } from 'react-router-dom';

import FooterNav from './footernav';
import './footer.css'


const Footer = () => (
        <div className="footer">
            <Link to="/" className="footerlogo">
                <img alt="footer logo" src="/images/footerlogo.svg"/>
            </Link>
            
            <FooterNav/>
        </div>
)


export default Footer;