import React, { useState, useEffect } from 'react'
import './DestinationsStyles.css'
import Hotel from '../assets/hotel.png'
import Apartament from '../assets/apartament.png'
import Complex from '../assets/complex.png'
import Vile from '../assets/vile.png'
import Pensiuni from '../assets/pensiuni.png'
import axios from 'axios'

function Destinations() {
  const [activeTab, setActiveTab] = useState('region')
  const [email, setEmail] = useState('')

  const [allDestinations, setAllDestinations] = useState([])
  const [organizedDestinations, setOrganizedDestinations] = useState({})

  const organizeDestinationsByType = destinations => {
    return destinations.reduce((acc, destination) => {
      const type = destination.type || 'Others'

      if (!acc[type]) {
        acc[type] = []
      }

      acc[type].push({
        name: destination.name,
        propertiesCount: destination.propertiesCount,
      })

      return acc
    }, {})
  }

  useEffect(() => {
    const fetchDestinations = async () => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user && user.token) {
        try {
          const response = await axios.get('/api/destinations', {
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-Type': 'application/json',
            },
          })
          setAllDestinations(response.data)
          const organizedData = organizeDestinationsByType(response.data)
          setOrganizedDestinations(organizedData)
        } catch (error) {
          console.error('Error fetching destinations:', error)
        }
      }
    }

    fetchDestinations()
  }, [])

  const handleSubscribe = e => {
    e.preventDefault()
    alert(`Abonat cu succes: ${email}`)
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="destinations">
      <div className="container">
        <h1>Destinații populare acum</h1>
        <p>Cele mai populare destinații pentru călătorii</p>
        <div className="img-container">
          {allDestinations
            .sort((a, b) => b.searchCount - a.searchCount)
            .slice(0, 3)
            .map((destination, index) => (
              <div key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/destinations/${destination.imagePath}`}
                  alt={destination.imagePath}
                />
                <p>{destination.name}</p>
              </div>
            ))}
        </div>
        <h2>Căutați după tipul proprietății</h2>
        <div className="img-container">
          <img src={Hotel} alt="Hotel" />
          <img src={Apartament} alt="Apartament" />
          <img src={Complex} alt="Complex" />
          <img src={Vile} alt="Vile" />
          <img src={Pensiuni} alt="Pensiuni" />
        </div>
        <h2>Destinații care ne plac</h2>
        <div className="tabs">
          {Object.keys(organizedDestinations).map((tab, index) => (
            <button
              key={index}
              className={activeTab === tab ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab)}
            >
              {capitalizeFirstLetter(tab)}
            </button>
          ))}
        </div>
        <div className="destinations-list">
          {organizedDestinations[activeTab]?.map((destination, index) => (
            <div key={index} className="destination-item">
              <span>{destination.name}</span>
              <span>{destination.propertiesCount + ' proprietăți'}</span>
            </div>
          ))}
        </div>

        {/* Componenta de newsletter */}
        <div className="newsletter-container">
          <h2>Economisiți timp și bani!</h2>
          <p>Abonați-vă și vom trimite cele mai bune oferte</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="E-mailul dvs."
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Abonare
            </button>
          </form>
        </div>
        <Footer />
      </div>
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

// Exportăm componenta Destinations pentru a putea fi folosită în alte părți ale aplicației
export default Destinations
