import React from 'react';
import './AnulareRezervareStyles.css'; // Make sure to name your CSS file accordingly

function AnulareRezervare() {
  return (
    <div className="AnulareRezervare-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Pot să-mi anulez rezervarea?</h1>
      <p>Da! Toate taxele de anulare sunt fixate de proprietate și specificate în politica de anulare. Veți plăti proprietății orice cost suplimentar.</p>
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

export default AnulareRezervare;
