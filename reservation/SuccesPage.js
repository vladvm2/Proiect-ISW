import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const saveReservations = async reservations => {
  try {
    const token = JSON.parse(localStorage.getItem('user') || '{}').token
    const response = await axios.post(
      '/api/reservations',
      { reservations },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Failed to save reservations:', error.message)
    throw new Error('Failed to save reservations')
  }
}

const updateFlightsBatch = async updates => {
  try {
    const token = JSON.parse(localStorage.getItem('user') || '{}').token
    const response = await axios.put(
      '/api/flights/batch-update',
      { updates },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Failed to update flights:', error.message)
  }
}

const SuccessPage = () => {
  useEffect(() => {
    const storedReservations = localStorage.getItem('reservations')
    const reservations = storedReservations
      ? JSON.parse(storedReservations)
      : []
    if (reservations.length > 0) {
      const userEmail = JSON.parse(localStorage.getItem('user') || '{}').email

      const formattedReservations = reservations.map(reservation => ({
        email: userEmail,
        departure: reservation.departure,
        arrival: reservation.arrival,
        departureDateTime: reservation.departureDateTime,
        arrivalDateTime: reservation.arrivalDateTime,
        price: reservation.price,
        seatsReserved: reservation.quantity,
      }))

      const updates = reservations.map(reservation => ({
        id: reservation.id,
        seatsReserved: reservation.quantity,
      }))

      saveReservations(formattedReservations)
        .then(() => updateFlightsBatch(updates))
        .then(() => console.log('All flights updated successfully'))
        .catch(error =>
          console.error('Failed during operations:', error.message)
        )
        .finally(() => localStorage.removeItem('reservations'))
    }
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Plata a fost efectuată cu succes!</h2>
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/success.png`}
        alt="Success"
        style={{ width: 200, height: 200 }}
      />
      <div>
        <button
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Înapoi la Pagina Principală
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SuccessPage
