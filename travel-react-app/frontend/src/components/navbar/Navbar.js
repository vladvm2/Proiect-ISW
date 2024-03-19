import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import{HiOutlineMenuAlt4} from 'react-icons/hi'
import{FaFacebook} from'react-icons/fa'
import{FaInstagram} from'react-icons/fa'
import{FaTwitter} from'react-icons/fa'
import{FaPinterest} from'react-icons/fa'
import{FaYouTube} from'react-icons/fa'

import'./NavbarStyles.css'
function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className="logo">
            <h2>BEACHES.</h2>
        </div>
        <ul className="nav-menu">
    <li>Home</li>
    <li>Destinations</li>
    <li>Travel</li>
    <li>Book</li>
    <li>Views</li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon' style={{marginRight:'1rem'}} />
            <BsPerson className='icon' />

        </div>
        <div className="hamburger" onClick={handleNav}>
           <HiOutlineMenuAlt4 className='icon' />
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-nav">
            <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
            </ul>
            <div className="mobile-menu-botton">
                <div className="menu-icons">
                <button>Search</button>
                <button>Account</button>
            </div>
            <div className="social-icons"></div>
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
            <FaPinterest className='icon' />
            <FaYouTube className='icon' />
        </div>

        </div>
        </div>

    )
}
export default Navbar