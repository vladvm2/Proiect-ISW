import React from 'react'
import './HolidayStaysStyles.css' // Verifică calea către fișierul CSS

// Importurile pentru imaginile utilizate în secțiunea "Explorați România"
import Costinesti from '../assets/costinesti.png'
import Brasov from '../assets/brasov.png'
// Adaugă importuri similare pentru restul imaginilor necesare

function HolidayStays() {
  const recentSearchesData = [
    {
      id: 1,
      name: 'Costinești',
      dateRange: '13 Iul - 18 Iul',
      guests: '6 persoane',
      image: Costinesti,
    },
    // Adaugă aici alte căutări recente, împreună cu importurile lor de imagini
  ]

  const promotionsData = [
    {
      id: 1,
      title: 'Ofertă Specială',
      description: 'Economisiți până la 25% la hotelurile noastre partenere',
    },
    // Adaugă aici alte promoții
  ]

  const exploreRomaniaData = [
    { id: 1, name: 'Brașov', propertiesCount: 1664, image: Brasov },
    // Adaugă aici alte destinații, împreună cu importurile lor de imagini
  ]

  return (
    <div className="container">
      <Header />
      <SearchSection />
      <RecentSearches searches={recentSearchesData} />
      <Promotions promotions={promotionsData} />
      <ExploreSection destinations={exploreRomaniaData} />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <nav>
        <img src="logo.png" alt="HolidayStays Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <a href="#home">Acasă</a>
          </li>
          <li>
            <a href="#about">Despre</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="login-btn">Autentificare</button>
      </nav>
    </header>
  )
}

function SearchSection() {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Căutați destinații, hoteluri, apartamente..."
        className="search-input"
      />
      <button type="button" className="search-btn">
        Caută
      </button>
    </section>
  )
}

function RecentSearches({ searches }) {
  return (
    <section className="recent-searches">
      <h2>Căutările dvs. recente</h2>
      <div className="search-cards-container">
        {searches.map(search => (
          <div key={search.id} className="search-card">
            <img src={search.image} alt={search.name} />
            <h3>{search.name}</h3>
            <p>{search.dateRange}</p>
            <p>{search.guests}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Promotions({ promotions }) {
  return (
    <section className="promotions">
      <h2>Oferte Speciale</h2>
      <div className="promotion-cards-container">
        {promotions.map(promo => (
          <div key={promo.id} className="promotion-card">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExploreSection({ destinations }) {
  return (
    <section className="explore-section">
      <h2>Explorați România</h2>
      <div className="explore-cards-container">
        {destinations.map(destination => (
          <div key={destination.id} className="explore-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.propertiesCount} proprietăți</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} ExplorVoyage. Toate drepturile
        rezervate.
      </p>
    </footer>
  )
}

export default HolidayStays
