import React from 'react';
import './ConfirmareAnulareStyles.css'; // Make sure to name your CSS file accordingly

function ConfirmareAnulare() {
  return (
    <div className="ConfirmareAnulare-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Cum ştiu dacă rezervarea mea a fost anulată?</h1>
      <p> După ce anulați o rezervare prin noi, ar trebui să primiți un e-mail de confirmare a anulării. Verificați-vă inbox-ul și fișierele de spam/junk. Dacă nu primiți e-mail în mai puțin de 24 de ore, vă rugăm contactați proprietatea pentru a confirma că s-a primit anularea dumneavoastră.</p>
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

export default ConfirmareAnulare;