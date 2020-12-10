import React from 'react';
import  './footer.css';
import { Link } from "react-router-dom";

const FooterNav = () => {

    const usefulLinks = () => {
        return(
            <div>
                
                <ul>
                <h3>Useful Links</h3>
                    <li>About InstaDriver</li>
                    <li>Verified Search(For Employers &amp; Drivers)</li>
                    <li>Top Ad Feature (For Drivers)</li>
                </ul>
            </div>
        )
    }

    const usefulLinks1 = () => {
        return(
            <div>
                <ul>
                <h3>Useful Links</h3>
                    <li>Driver SignIn</li>
                    <li>Driver SignUp</li>
                </ul>
            </div>
        )
    }

    const usefulLinks2 = () => {
        return(
            <div>
                <ul>
                <h3>Useful Links</h3>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
        )
    }

    const socials = () => (
        <div className={socials}>
            <h3>Social Media</h3>
            <Link to="/" ><img alt="facebook logo" src="/images/facebook.svg"/></Link>
            <Link to="/" ><img alt="twiter logo" src="/images/twitter.svg"/></Link>
            <Link to="/" ><img alt="youtube logo" src="/images/youtube.svg"/></Link>
            <Link to="/" ><img alt="instagram logo" src="/images/instagram.svg"/></Link>
        </div>
    )

    const contact = () => (
        <div>
            <h3>Contact</h3>
            <p>saysomething@instadriver.com</p>
        </div>
        
    )


    return(
        <div className="footernav">
            {usefulLinks()}
            {usefulLinks1()}
            {usefulLinks2()}
            {socials()}
            {contact()}
        </div> 
     )
}
  
    

export default FooterNav;