// Register.js
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterStyles.css'
import { useSignup } from '../hooks/useSignup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
  const navigate = useNavigate()
  const { signup, error, isLoading, resetError } = useSignup()

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await signup(userDetails.name, userDetails.email, userDetails.password)
  }

  useEffect(() => {
    if (isLoading === false) {
      if (!error) {
        navigate('/')
      } else {
        toast.error(error, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: 'white', color: 'red' },
        })
      }
    }
  }, [isLoading, error, navigate])

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  )
}

export default Register
