import React from 'react'
import { Link } from 'react-router-dom'

const CancelledPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Plata a fost anulată!</h2>
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/cancelled.png`}
        alt="Cancelled"
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

export default CancelledPage
