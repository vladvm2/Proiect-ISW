import React from 'react';
import './GasireEmailConfirmareStyles.css'; // Make sure to name your CSS file accordingly

function GasireEmailConfirmare() {
  return (
    <div className="GasireEmailConfirmare-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Nu pot să găsesc e-mailul de confirmare. Ce trebuie să fac?</h1>
      <p> Verificați căsuța de mesaje primite și secțiunile spam și mesaje șterse aferente adresei de e-mail. Dacă nici așa nu puteți găsi confirmarea, mergeți la booking.com/help și o vom retrimite.</p>
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

export default GasireEmailConfirmare;