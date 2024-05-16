import React from 'react';
import './PlataCuAltCardStyles.css'; // Make sure to name your CSS file accordingly

function PlataCuAltCard() {
  return (
    <div className="PlataCuAltCard-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Pot să plătesc pentru sejurul meu cu un card de credit diferit de cel utilizat pentru a rezerva?</h1>
      <p> Este foarte probabil că da. Proprietățile acceptă de obicei plata sejurului cu un card diferit sau în numerar. Pentru a confirma că plata cu un card de credit diferit este acceptată, vă rugăm să contactați proprietatea.</p>
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

export default PlataCuAltCard;