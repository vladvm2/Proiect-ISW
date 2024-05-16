import React from 'react';
import './ModificareRezervareNerambursabilaStyles.css'; // Make sure to name your CSS file accordingly

function ModificareRezervareNerambursabila() {
  return (
    <div className="ModificareRezervareNerambursabila-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Pot să anulez o rezervare sau să modific datele unei rezervări cu preţ nerambursabil??</h1>
      <p>În mod normal, anularea unei rezervări nerambursabile implică un cost. Totuși, aveți opțiunea de a solicita anulare gratuită atunci când vă administrați rezervarea. Se trimite o cerere la proprietate, care ar putea decide să renunțe la taxele de anulare. Nu este posibil să schimbați datele pentru o rezervare nerambursabilă, dar este posibil să rezervați din nou pentru datele dorite, dacă vi se acceptă cererea de renunțare la taxele de anulare.</p>
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

export default ModificareRezervareNerambursabila;