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
                        <div className="social-item">
                            <a href="https://www.facebook.com/share/vnGKobdkHhDLHCWC/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='icon' />
                                <p>Facebook</p>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="https://www.instagram.com/explorervoyage/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='icon' />
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                       
                    </div>
                    <div className="right">
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
