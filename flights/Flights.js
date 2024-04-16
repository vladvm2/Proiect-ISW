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
  const [hasSearched, setHasSearched] = useState(false)

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
        <button type="submit">Căutare</button>
      </form>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Rezultatele Căutării:</h2>
          {searchResults.map((result, index) => {
            const departureDate = new Date(result.departureDateTime)
            const arrivalDate = new Date(result.arrivalDateTime)
            const duration = new Date(arrivalDate - departureDate)
            const durationHours = Math.floor((duration / (1000 * 60 * 60)) % 24)
            const durationMinutes = Math.floor((duration / (1000 * 60)) % 60)

            return (
              <div key={index} className="search-result-item">
                <div className="route-info">
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
              </div>
            )
          })}
        </div>
      )}
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
