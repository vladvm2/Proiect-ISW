import React from 'react';
import './TaxaAnulareStyles.css'; // Make sure to name your CSS file accordingly

function TaxaAnulare() {
  return (
    <div className="TaxaAnulare-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Dacă am nevoie să anulez rezervarea, voi plăti vreo taxă de anulare?</h1>
      <p>Dacă aveți o rezervare cu anulare gratuită, nu veți plăti o taxă de anulare. Dacă rezervarea nu mai poate fi anulată gratuit sau are un preț nerambursabil, atunci va trebui să plătiți o taxă de anulare. Toate taxele de anulare sunt fixate de proprietate. Veți plăti proprietății orice cost suplimentar.</p>
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

export default TaxaAnulare;