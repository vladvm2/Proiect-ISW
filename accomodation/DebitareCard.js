import React from 'react';
import './DebitareCardStyles.css'; // Make sure to name your CSS file accordingly

function DebitareCard() {
  return (
    <div className="DebitareCard-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Cine va debita cardul meu de credit şi când?</h1>
      <p> În general, proprietatea este responsabilă pentru debitarea cardului dumneavoastră. Dacă plata este administrată de Booking.com în loc, acest lucru va fi menţionat în mod clar în confirmarea rezervării dumneavoastră. În mod normal vă puteţi aştepta să plătiţi fie la check-in, fie la check-out, la proprietate. Cu toate acestea, există unele excepţii, cum ar fi acele proprietăţi care solicită o plată în avans pentru toată suma sau pentru o parte din aceasta. Din nou, acest lucru va fi menţionat clar în confirmarea rezervării dumneavoastră şi în politicile de plată. Dacă nu există nicio politică de plată în avans, este de asemenea posibil ca proprietatea să facă o încasare test de pe cardul dumneavoastră, înainte de sejur. Aceasta este o reţinere temporară, folosită pentru a valida cardul dumneavoastră şi a vă garanta rezervarea. Spre deosebire de o încasare reală, această plată vă va returnată pe card.</p>
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

export default DebitareCard;