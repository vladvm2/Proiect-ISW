import React from 'react';
import './FooterStyles.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>ExplorVoyage</h3>
                    <div className="social">
                        
                        <a href="https://www.facebook.com/share/vnGKobdkHhDLHCWC/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='icon' />
                        </a>
                        <a href="https://www.instagram.com/explorervoyage/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='icon' />
                        </a>
                      
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

