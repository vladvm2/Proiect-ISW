import React from 'react';
import './ConfirmarePlataStyles.css'; // Make sure to name your CSS file accordingly

function ConfirmarePlata() {
  return (
    <div className="ConfirmarePlata-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Mi s-a încasat plata. Mai trebuie să fac ceva?</h1>
      <p>În cele mai multe cazuri, nu mai este nevoie să faceți nimic. Așa cum se specifică în politica de plată din confirmarea rezervării, aceasta este probabil doar o plată parțială sau totală în avans. Dacă nu există o politică de plată în avans, atunci este posibil ca proprietatea să fi încasat o plată-test de pe cardul dumneavoastră. Aceasta este o blocare temporară, folosită pentru a vă garanta rezervarea și care vă va fi returnată. Dacă încă mai credeți că plata este neprevăzută, ne puteți contacta pentru pentru a vă ajuta. Noi putem contacta proprietatea în numele dumneavoastră numai după ce ne transmiteți o dovadă a încasării.</p>
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

export default ConfirmarePlata;