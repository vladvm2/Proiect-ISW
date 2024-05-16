import React, { useState, useEffect } from 'react'
import './RevervationsStyle.css'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const FlightTicket = ({ ticket, onSelect, onDelete, onUpdateQuantity }) => {
  return (
    <div className="ticket">
      <div className="ticket-details">
        <h3>
          Zbor din {ticket.departure} către {ticket.arrival}
        </h3>
        <p>Plecare: {new Date(ticket.departureDateTime).toLocaleString()}</p>
        <p>Aterizare: {new Date(ticket.arrivalDateTime).toLocaleString()}</p>

        <p>Pret bilet: ${ticket.price.toFixed(2)}</p>
        <div className="quantity">
          <label htmlFor={`quantity-${ticket.id}`}>Tickets:</label>
          <select
            id={`quantity-${ticket.id}`}
            value={ticket.quantity}
            onChange={e => onUpdateQuantity(ticket, parseInt(e.target.value))}
          >
            {Array.from({ length: ticket.maxQuantity }, (_, i) => i + 1).map(
              number => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <button onClick={() => onDelete(ticket)} className="button-no-background">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/delete.png`}
          alt="Delete"
          style={{ width: 40, height: 40, margin: -15 }}
        />
      </button>
    </div>
  )
}

const ReservationsScreen = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const storedReservations = localStorage.getItem('reservations')
    const reservations = storedReservations
      ? JSON.parse(storedReservations)
      : []

    setTickets(reservations)
  }, [])

  const handleUpdateQuantity = (ticketToUpdate, quantity) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === ticketToUpdate.id
        ? { ...ticket, quantity: quantity }
        : ticket
    )
    setTickets(updatedTickets)
    localStorage.setItem('reservations', JSON.stringify(updatedTickets))
  }

  const subtotal = tickets.reduce(
    (acc, ticket) => acc + ticket.price * ticket.quantity,
    0
  )
  const handleDelete = ticket => {
    const updatedTickets = tickets.filter(t => t.id !== ticket.id)

    setTickets(updatedTickets)

    localStorage.setItem('reservations', JSON.stringify(updatedTickets))
  }
  const taxes = subtotal * 0.04

  const makePayment = async () => {
    const stripe = await loadStripe(
      'pk_test_51PDBrcBSOT4h5J63Tt7G1yH864YKvbrJZqUCSKNh2xGXe3vcb878Sz5BYcgqgETQqajd0MAkXlmEG8xUHFemyvQB00Ualizwgj'
    )

    const body = {
      products: tickets.map(ticket => ({
        id: ticket.id,
        name: `${ticket.departure} to ${ticket.arrival}`,
        quantity: ticket.quantity,
        price: ticket.price,
      })),
    }

    const response = await axios.post('/api/reservations/payment', body, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user') || '{}').token
        }`,
      },
    })

    const session = response.data

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
  }

  return (
    <div className="reservations-screen">
      <h1>Your Reservations</h1>
      {tickets.length === 0 ? (
        <p>You currently have no unfinished reservations.</p>
      ) : (
        tickets.map(ticket => (
          <FlightTicket
            key={ticket.id}
            ticket={ticket}
            onUpdateQuantity={handleUpdateQuantity}
            onDelete={handleDelete}
          />
        ))
      )}
      <div className="summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Taxes: ${taxes.toFixed(2)}</p>
        <p>Total: ${(subtotal + taxes).toFixed(2)}</p>
      </div>
      <div className="payment-section">
        <button className="pay-button" onClick={makePayment}>
          Pay 💸
        </button>
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/mastercard.png`}
          alt="Mastercard"
          className="payment-icon"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/visa.png`}
          alt="Visa"
          className="payment-icon"
        />
      </div>
    </div>
  )
}

export default ReservationsScreen
