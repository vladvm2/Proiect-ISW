import React from 'react';
import './PoliticaDePlataStyles.css'; // Make sure to name your CSS file accordingly

function PoliticaDePlata() {
  return (
    <div className="PoliticaDePlata-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Unde pot să văd politica de plată aferentă rezervării mele?</h1>
      <p> Puteți găsi politica de plată în confirmarea rezervării, în secțiunea referitoare la preț. Această secțiune include și o detaliere a prețului, împreună cu metodele de plată acceptate.</p>
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

export default PoliticaDePlata;