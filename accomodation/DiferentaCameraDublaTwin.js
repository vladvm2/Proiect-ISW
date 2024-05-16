import React from 'react';
import './DiferentaCameraDublaTwinStyles.css'; // Make sure to name your CSS file accordingly

function DiferentaCameraDublaTwin() {
  return (
    <div className="DiferentaCameraDublaTwin-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Care este diferenţa dintre o cameră dublă şi o cameră twin?</h1>
      <p>O cameră dublă are un pat dublu, iar o cameră twin are 2 paturi de o persoană. Dacă o cameră se numește dublă/twin, înseamnă că poate fi configurată în oricare dintre aceste tipuri. Proprietatea va face tot posibilul să vă întâlnească așteptările.</p>
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

export default DiferentaCameraDublaTwin;