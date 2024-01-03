import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer=()=>{

    return(
<div className="footermain">
    <div className="footermain-1">
        <div className="footer1">
            <div className="footercontent">
                <h4>Contact US</h4>
                <a href="/mobile">
                    <p>Whatsapp</p>
                </a>
                <a href="/e-mail">
                    <p>E-mai address</p>
                </a>
                <a href="/Headoffice">
                    <p>HeadOffice address</p>
                </a>
            </div>

            <div className="footercontent">
                <h4>Resources</h4>
                <a href="/Faq">
                    <p>FAQ</p>
                </a>
                <a href="/Legal">
                    <p>Legal Information</p>
                </a>
                <a href="Rating">
                    <p>Feedback</p>
                    </a>
            </div>

            <div className="footercontent">
                <h4>Official Partners</h4>
                <a href="/hypermarket">
                    <p>HyperMarket</p>
                </a>
                <a href="/dmart">
                    <p>Dmart</p>
                </a>
            </div>

            <div className="footercontent">
                <h4>Company</h4>
                <a href="/about">
                    <p>About Us</p>
                </a>
                <a href="ContactForm">
                    <p>Contact</p>
                </a>
                
            </div>

            <div className="footercontent">
                <h4>follow us on</h4>
                <div className="socialmedia">
                    
                </div>
            </div>
        </div>
        <hr></hr>

        <div className="footer2">
            <div className="copyright">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>

            <div className="footer2-content">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
               
            </div>

        </div>
    </div>
</div>
    )
}
export default Footer;