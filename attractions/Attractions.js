import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AttractionsStyles.css'
import axios from 'axios'

import Cluj from '../assets/cluj.png'
import Sibiu from '../assets/sibiu.png'
import Brasov from '../assets/brasov.png'
import Bucuresti from '../assets/bucuresti.png'
import Constanta from '../assets/constanta.png'
import Timisoara from '../assets/timisoara.png'

function Attractions() {
  const [search, setSearch] = useState('')
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [attractions, setAttractions] = useState([])
  const [allAttractions, setAllAttractions] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const isAuthenticated = !!localStorage.getItem('user')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/attractions', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        })
        const sortedAttractions = data
          .sort((a, b) => b.numberOfAttractions - a.numberOfAttractions)
          .slice(0, 9)
        setAttractions(sortedAttractions)
        setAllAttractions(sortedAttractions)
        setIsLoading(false)
      } catch (error) {
        setError('Error fetching attractions')
        setIsLoading(false)
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (search.trim() === '') {
      setAttractions(allAttractions)
    } else {
      const regex = new RegExp(search, 'i')
      const filteredAttractions = allAttractions.filter(attraction =>
        regex.test(attraction.name)
      )
      setAttractions(filteredAttractions)
    }
  }, [search, allAttractions])

  const handleSearch = event => {
    event.preventDefault()
    const regex = new RegExp(search, 'i')
    const filteredAttractions = allAttractions.filter(attraction =>
      regex.test(attraction.name)
    )
    setAttractions(filteredAttractions)
  }

  const handleDestinationClick = image => {
    setSelectedDestination(image)
  }

  return (
    <div className="attractions-container">
      <div className="search-section">
        <h1>Atracții, activități și experiențe</h1>
        <p>
          Descoperiți noi atracții și experiențe care să se potrivească
          intereselor și stilului dvs. de călătorie
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Unde mergeți?"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Căutare</button>
        </form>
      </div>
      <div className="attractions-list">
        {attractions.length > 0 ? (
          attractions.map((attraction, index) => (
            <div
              key={index}
              className="attraction-card"
              onClick={() => handleDestinationClick(attraction.name)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/attractions/${attraction.imagePath}`}
                alt={attraction.name}
              />
              <div className="attraction-info">
                <h3>{attraction.name}</h3>
                <p>{attraction.numberOfAttractions} activități</p>
              </div>
            </div>
          ))
        ) : (
          <p>Nu au fost găsite atracții.</p>
        )}
      </div>
      {error && <p>Eroare la încărcarea atracțiilor: {error}</p>}
      {!isAuthenticated && <Authentication />}
      <CareSection />
      <MoreDestinationsSection
        handleDestinationClick={handleDestinationClick}
      />
      <Footer />
      {selectedDestination && (
        <SelectedDestination image={selectedDestination} />
      )}
    </div>
  )
}

function Authentication() {
  const navigate = useNavigate()

  const handleAuthClick = () => {
    navigate('/login')
  }

  return (
    <div className="authentication-section">
      <h2>Autentificați-vă pentru a economisi timp</h2>
      <p>
        Contul ExplorVoyage.com vă permite să rezervați folosindu-vă detaliile
        salvate
      </p>
      <button className="auth-button" onClick={handleAuthClick}>
        Autentificare
      </button>
    </div>
  )
}

function CareSection() {
  return (
    <div className="care-section">
      <h2>Ne-am ocupat de toate</h2>
      <div className="care-cards">
        <CareCard
          icon="🔍"
          title="Explorați atracții de top"
          description="Bucurați-vă la maximum de destinația dvs., cu atracții, tururi, activități și multe altele."
        />
        <CareCard
          icon="⚡"
          title="Rapid și flexibil"
          description="Rezervați bilete online în doar câteva minute, cu anulare gratuită la numeroase atracții."
        />
        <CareCard
          icon="👋"
          title="Asistență oricând aveți nevoie"
          description="Echipa globală de la Serviciul Clienți al Booking.com vă stă la dispoziție non-stop."
        />
      </div>
    </div>
  )
}

function CareCard({ icon, title, description }) {
  return (
    <div className="care-card">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function MoreDestinationsSection({ handleDestinationClick }) {
  return (
    <div className="more-destinations-section">
      <h2>Explorați mai multe destinații</h2>
      <p>Descoperiți activități în orașe din toată lumea</p>
      <div className="destinations-tabs">
        <button onClick={() => handleDestinationClick(Cluj)}>
          Cluj-Napoca
        </button>
        <button onClick={() => handleDestinationClick(Sibiu)}>Sibiu</button>
        <button onClick={() => handleDestinationClick(Brasov)}>Brașov</button>
        <button onClick={() => handleDestinationClick(Bucuresti)}>
          București
        </button>
        <button onClick={() => handleDestinationClick(Constanta)}>
          Constanța
        </button>
        <button onClick={() => handleDestinationClick(Timisoara)}>
          Timișoara
        </button>
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

function SelectedDestination({ image }) {
  return (
    <div className="selected-destination">
      <img src={image} alt="Selected Destination" />
    </div>
  )
}

export default Attractions
