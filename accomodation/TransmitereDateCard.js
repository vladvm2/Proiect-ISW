import React from 'react';
import './TransmitereDateCardStyles.css'; // Make sure to name your CSS file accordingly

function TransmitereDateCard() {
  return (
    <div className="TransmitereDateCard-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>De ce trebuie să transmit datele cardului meu de credit?</h1>
      <p>În mod normal proprietățile solicită acest lucru pentru a vă garanta rezervarea, iar cardul este adesea folosit pentru a plăti când rezervați. Dacă nu trebuie să faceți o plată în avans, este posibil ca proprietatea să blocheze o sumă pe cardul dumneavoastră de credit pentru a se asigura că există fonduri suficiente. Această plată-test vă va fi returnată.</p>
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

export default TransmitereDateCard;