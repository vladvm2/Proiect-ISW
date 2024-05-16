import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt4, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import Modal from '../modal/Modal' // Asigură-te că această cale este corectă
import CurrencyModal from '../modal/CurrencyModal' // Asigură-te că această cale este corectă
import './NavbarStyles.css' // Asigură-te că această cale este corectă

import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import { toast, ToastContainer } from 'react-toastify'

function Navbar() {
  const [nav, setNav] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showCurrencyModal, setShowCurrencyModal] = useState(false)
  const [currency, setCurrency] = useState('USD')

  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleNav = () => setNav(!nav)

  const handleLogout = () => {
    logout()
    toast.info('You have been logged out.')
  }

  useEffect(() => {
    const handleMouseMove = e => {
      if (e.clientY < 100) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <header className={showNavbar ? 'navbar' : 'navbar hidden'}>
      <div className="logo">
        <Link to="/">
          <h2>ExplorVoyage</h2>
        </Link>
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose className="icon" />
        )}
      </div>
      <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/" onClick={handleNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/destinations" onClick={handleNav}>
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/attractions" onClick={handleNav}>
            Attractions
          </Link>
        </li>
        <li>
          <Link to="/flights" onClick={handleNav}>
            Flights
          </Link>
        </li>
        <li>
          <Link to="/holidaystays" onClick={handleNav}>
            Holiday Stays
          </Link>
        </li>
      </ul>
      <div className="nav-icons">
        <Link to="/search" className="icon">
          <BiSearch />
        </Link>

        {user ? (
          <>
            <div className="auth-status">Logged in as {user.name}</div>
            <button onClick={handleLogout} className="icon">
              Logout
            </button>

            <button onClick={() => console.log('')} className="icon">
              <Link to="/reservations" className="icon">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icons/airplane-ticket.png`}
                  alt="Reservations"
                  style={{ width: 40, height: 40, margin: -15 }}
                />
              </Link>
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="icon">
              Login
            </Link>
            <Link to="/register" className="icon">
              Register
            </Link>
          </>
        )}
        <button
          className="currency-button"
          onClick={() => setShowCurrencyModal(!showCurrencyModal)}
        >
          {currency}
        </button>
        <Link to="/help" className="icon">
          <HiOutlineQuestionMarkCircle />
        </Link>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />

      {showModal && <Modal toggleModal={() => setShowModal(false)} />}
      {showCurrencyModal && (
        <CurrencyModal
          toggleCurrencyModal={() => setShowCurrencyModal(false)}
          setCurrency={setCurrency}
          currentCurrency={currency}
        />
      )}
    </header>
  )
}

export default Navbar
