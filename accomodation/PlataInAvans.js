import React from 'react';
import './PlataInAvansStyles.css'; // Make sure to name your CSS file accordingly

function PlataInAvans() {
  return (
    <div className="PlataInAvans-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Pot să plătesc în avans?</h1>
      <p> Unele dintre proprietăți solicită o plată în avans, cunoscută și sub numele de depozit, înaintea sosirii. Plata în avans poate fi parțială sau totală. În cazul unei plăți parțiale, restul este plătit în timpul sejurului la proprietate. Pentru unele proprietăți plata în avans nu este necesară și veți plăti suma totală în timpul sejurului la proprietate. Este cel mai bine să verificați politica de plată din confirmare, pentru mai multe detalii.</p>
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

export default PlataInAvans;