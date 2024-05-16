import React from 'react'
import './SearchStyles.css'
import Gold from '../assets/gold.png'

function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p></p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="Gold" style={{ marginRight: '1rem' }} />
              </div>

              <div>
                <h3>WORLD'S LEADING</h3>
                <p></p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p></p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
        <div className="promo">
          <h4 className="save">GET AN ADDITIONAL 10% OFF</h4>
          <p className="timer">24 HOURS LEFT!</p>
          <p className="offers">VIEW ALL CURRENT OFFERS</p>
        </div>
        <form>
          <div className="input-wrap">
            <label>Destination</label>
            <select>
              <option value="1">Grande Antigua</option>
              <option value="1">Paris</option>
              <option value="1">Bali</option>
              <option value="1">Maldives</option>
              <option value="1">Roma</option>
              <option value="1">Italia</option>
              <option value="1">Spania</option>
              <option value="1">Japonia</option>
            </select>
          </div>
          <div className="date">
            <div className="input-wrap">
              <label>Check-in</label>
              <input type="date" />
            </div>
            <div className="input-wrap">
              <label>Check-out</label>
              <input type="date" />
            </div>
          </div>
          <button>Rates & Availibilities</button>
        </form>
      </div>
    </div>
  )
}

export default Search
