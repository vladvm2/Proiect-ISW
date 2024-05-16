import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FlightsStyles.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'

function Flights() {
  const today = new Date().toISOString().split('T')[0]

  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departureDate: today,
    returnDate: today,
  })
  const [searchResults, setSearchResults] = useState([])

  const [selectedSeats, setSelectedSeats] = useState({})

  const handleQuantityChange = (flightId, quantity) => {
    setSelectedSeats(prevSeats => ({
      ...prevSeats,
      [flightId]: quantity,
    }))

    console.log(flightId, selectedSeats[flightId])
  }
  const handleSelect = result => {
    const reservationDetails = {
      id: result._id,
      departure: result.departure,
      arrival: result.arrival,
      departureDateTime: result.departureDateTime,
      arrivalDateTime: result.arrivalDateTime,
      price: result.price,
      quantity: selectedSeats[result._id] || 1,
      maxQuantity: result.seatsAvailable,
    }
    console.log(selectedSeats[result._id])

    const currentReservations =
      JSON.parse(localStorage.getItem('reservations')) || []

    const existingIndex = currentReservations.findIndex(
      r =>
        r.departure === reservationDetails.departure &&
        r.arrival === reservationDetails.arrival &&
        new Date(r.departureDateTime).getTime() ===
          new Date(reservationDetails.departureDateTime).getTime()
    )

    if (existingIndex !== -1) {
      currentReservations[existingIndex].seatsReserved =
        reservationDetails.seatsReserved
    } else {
      currentReservations.push(reservationDetails)
    }

    localStorage.setItem('reservations', JSON.stringify(currentReservations))
    alert('Rezervare salvată!')
  }

  const handleChange = event => {
    const { name, value } = event.target
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value,
    }))
  }

  const handleSearch = event => {
    event.preventDefault()

    const fetchFlights = async () => {
      if (searchParams.from && searchParams.to && searchParams.departureDate) {
        try {
          const formattedDepartureDate = new Date(
            searchParams.departureDate
          ).toISOString()

          const response = await axios.get(`/api/flights/search`, {
            params: {
              departure: searchParams.from,
              arrival: searchParams.to,
              departureDate: formattedDepartureDate,
              passengers: 1,
            },
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem('user') || '{}').token
              }`,
            },
          })
          setSearchResults(response.data)
        } catch (error) {
          console.error('Error fetching flights:', error)
          toast.error(error, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        }
      } else {
        toast.error('Please fill in all the fields', {
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

    fetchFlights()
  }

  return (
    <div className="flights-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          name="from"
          placeholder="De unde?"
          value={searchParams.from}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to"
          placeholder="Până unde?"
          value={searchParams.to}
          onChange={handleChange}
        />
        <input
          type="date"
          name="departureDate"
          value={searchParams.departureDate}
          onChange={handleChange}
        />
        {/* <input
          type="date"
          name="returnDate"
          value={searchParams.returnDate}
          onChange={handleChange}
        /> */}
        <button type="submit">Căutare 🔎</button>
      </form>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <>
            <h2>Rezultatele Căutării:</h2>
            {searchResults.map((result, index) => {
              const flightId = result._id || index
              const departureDate = new Date(result.departureDateTime)
              const arrivalDate = new Date(result.arrivalDateTime)
              const duration = new Date(arrivalDate - departureDate)
              const durationHours = Math.floor(
                (duration / (1000 * 60 * 60)) % 24
              )
              const durationMinutes = Math.floor((duration / (1000 * 60)) % 60)

              return (
                <div
                  key={flightId}
                  className="search-result-item"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div className="route-info" style={{ flexGrow: 1 }}>
                    <h3>
                      Din {result.departure} către {result.arrival}
                    </h3>
                    <p>
                      Plecare:{' '}
                      {departureDate.toLocaleString('ro-RO', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
                    </p>
                    <p>
                      Aterizare:{' '}
                      {arrivalDate.toLocaleString('ro-RO', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
                    </p>
                    <p>
                      Durata: {durationHours}h {durationMinutes}m
                    </p>
                    <p>Preț: {result.price}€</p>
                    <p>Locuri disponibile: {result.seatsAvailable}</p>
                  </div>

                  <div className="reservation-details">
                    <div className="quantity">
                      <label htmlFor={`quantity-${flightId}`}>Tickets:</label>
                      <select
                        id={`quantity-${flightId}`}
                        value={selectedSeats[flightId] || 1}
                        onChange={e =>
                          handleQuantityChange(
                            flightId,
                            parseInt(e.target.value, 10)
                          )
                        }
                      >
                        {Array.from(
                          { length: result.seatsAvailable },
                          (_, i) => i + 1
                        ).map(number => (
                          <option key={number} value={number}>
                            {number}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() => handleSelect(result)}
                      style={{ marginLeft: '20px' }}
                    >
                      Select ✈️
                    </button>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <p>Nu există rezultate.</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} ExplorVoyage™ Toate drepturile
        rezervate.
      </p>
    </footer>
  )
}

export default Flights
