import React from 'react';
import './DetaliiCardCreditStyles.css'; // Make sure to name your CSS file accordingly

function DetaliiCardCredit() {
  return (
    <div className="DetaliiCardCredit-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>De ce trebuie să furnizez detalii despre cardul meu de credit?</h1>
      <p>Proprietățile cer aceste detalii pentru a vă confirma rezervarea. Este posibil să fiți preautorizat* pentru a ca proprietatea să se asigure de validitatea cardului dumneavoastră de credit și că acesta are suficiente fonduri, sau în unele cazuri, detaliile sunt utilizate pentru a plăti sejurul când rezervați. *O preautorizare este o blocare temporară a unei sume pentru a se asigura de validitatea cardului dumneavoastră de credit și că are suficiente fonduri. Suma reținută va fi returnată în contul dumneavoastră după o anumită perioadă de timp, care depinde de proprietate și de furnizorul de card.</p>
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

export default DetaliiCardCredit;