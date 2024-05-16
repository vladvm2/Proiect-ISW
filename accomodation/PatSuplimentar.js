import React from 'react';
import './PatSuplimentarStyles.css'; // Make sure to name your CSS file accordingly

function PatSuplimentar() {
  return (
    <div className="PatSuplimentar-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Poate fi pus la dispoziție un pat suplimentar sau un pătuț pentru un copil?</h1>
      <p> Depinde de politica proprietății. Costurile suplimentare pentru copii, inclusiv paturi/pătuțuri suplimentare, nu sunt incluse în prețul rezervării. Vă rugăm contactați direct proprietatea pentru aceste informații.</p>
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

export default PatSuplimentar;