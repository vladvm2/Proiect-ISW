import React from 'react';
import './PlataIntegralaCopiiStyles.css'; // Make sure to name your CSS file accordingly

function PlataIntegralaCopii() {
  return (
    <div className="PlataIntegralaCopii-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Plătesc integral pentru copilul meu/copiii mei?</h1>
      <p>Costurile suplimentare pentru copii, dacă este cazul, nu sunt incluse în prețul rezervării. Vă rugăm verificați direct cu proprietatea pentru a vedea dacă și când veţi plăti pentru copilul/copiii dumneavoastră.</p>
      <div className="feedback">
        <span>V-a fost de ajutor această informație?</span>
        <span className="feedback-icons">
          <button className="thumb-up">👍</button>
          <button className="thumb-down">👎</button>
        </span>
      </div>
      <h2>Asistență suplimentară</h2>
      <div className="additional-help">
        <span>Autentificați-vă pentru a primi asistență în legătură cu o rezervare</span>
        <span className="chevron">&gt;</span>
      </div>
      <div className="additional-help">
        <span>Am nevoie de asistență în legătură cu altceva</span>
        <span className="chevron">&gt;</span>
      </div>
    </div>
  );
}

export default PlataIntegralaCopii;