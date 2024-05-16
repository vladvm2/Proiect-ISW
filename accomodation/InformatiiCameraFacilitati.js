import React from 'react';
import './InformatiiCameraFacilitatiStyles.css'; // Make sure to name your CSS file accordingly

function InformatiiCameraFacilitati() {
  return (
    <div className="InformatiiCameraFacilitati-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Cum obţin mai multe informaţii despre cameră şi facilităţile proprietății?</h1>
      <p>Puteți vedea care sunt facilitățile camerei și ale proprietății în confirmarea rezervării.</p>
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

export default InformatiiCameraFacilitati;