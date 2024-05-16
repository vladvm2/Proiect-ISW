// ReservationDates.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ReservationDatesStyles.css'; // Asigurați-vă că fișierul CSS este denumit corect

function ReservationDates() {
  return (
    <div className="reservation-dates-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Datele rezervării</h1>
      <div className="faq-list-container">
        <Link to="/informatiicamerafacilitati" className="faq-item">
          <span>Cum obțin mai multe informații despre camera și facilitățile proprietății?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/patsuplimentar" className="faq-item">
          <span>Poate fi pus la dispoziție un pat suplimentar sau un pătuț pentru un copil?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/primirefactura" className="faq-item">
          <span>Cum pot să primesc o factură?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/gasireemailconfirmare" className="faq-item">
          <span>Nu pot să găsesc e-mailul de confirmare. Ce trebuie să fac?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/plataintegralacopii" className="faq-item">
          <span>Plătesc integral pentru copilul meu/copiii mei?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/diferentacameradublatwin" className="faq-item">
          <span>Care este diferența dintre o cameră dublă și o cameră twin?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/checkininafaraintervalului" className="faq-item">
          <span>Voi sosi în afara intervalului de check-in. Pot să fac check-in?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/modificarirezervare" className="faq-item">
          <span>Pot să fac modificări la rezervarea mea? De ex., să modific datele</span>
          <span className="chevron">&gt;</span>
        </Link>
      </div>
      <h2>Asistență suplimentară</h2>
      <div className="additional-help">
        <Link to="/asistenta-rezervare" className="help-link">
          <span>Autentificați-vă pentru a primi asistență în legătură cu o rezervare</span>
          <span className="chevron">&gt;</span>
        </Link>
      </div>
      <div className="additional-help">
        <Link to="/asistenta-alte-intrebari" className="help-link">
          <span>Am nevoie de asistență în legătură cu altceva</span>
          <span className="chevron">&gt;</span>
        </Link>
      </div>
    </div>
  );
}

export default ReservationDates;
