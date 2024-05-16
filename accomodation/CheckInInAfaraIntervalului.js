import React from 'react';
import './CheckInInAfaraIntervaluluiStyles.css'; // Make sure to name your CSS file accordingly

function CheckInInAfaraIntervalului() {
  return (
    <div className="CheckInInAfaraIntervalului-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Voi sosi în afara intervalului orar de check-in. Pot să fac check-in?</h1>
      <p> Acest lucru depinde de proprietate, care va face tot posibilul să vă întâlnească așteptările, dar nu vă poate garanta cererea. Puteți alege una dintre următoarele opțiuni: 
      Cereți check-in/check-out devreme sau târziu
      Contactați proprietatea
      </p>
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

export default CheckInInAfaraIntervalului;