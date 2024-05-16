// Payments.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentsStyles.css'; // Make sure your CSS file is named correctly

function Payments() {
  return (
    <div className="payments-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Plată</h1>
      <div className="faq-list-container">
        {/* Each question is a link that redirects to a different page */}
        <Link to="/metodedeplata" className="faq-item">
          <span>Ce metode de plată sunt acceptate?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/platainavans" className="faq-item">
          <span>Pot să plătesc în avans?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/confirmareplata" className="faq-item">
          <span>Mi s-a încasat plata. Mai trebuie să fac ceva?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/politicadeplata" className="faq-item">
          <span>Unde pot sa vad politica de plata aferenta rezervarii mele?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/transmiteredatecard" className="faq-item">
          <span>De ce trebuie sa transmit datele cardului meu de credit?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/platacualtcard" className="faq-item">
          <span>Pot sa platesc pentru sejurul meu cu un card de credit diferit de cel utilizat pentru a rezerva?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/detaliicardcredit" className="faq-item">
          <span>De ce trebuie sa furnizez detalii despre cardul meu de credit?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/debitarecard" className="faq-item">
          <span>Cine va debita cardul meu si cand?</span>
          <span className="chevron">&gt;</span>
        </Link>
      </div>
      <h2>Asistenta suplimentara</h2>
      <div className="additional-help">
        <Link to="/asistenta-rezervare" className="help-link">
          <span>Autentificați-vă pentru a primi asistență în legătură cu o rezervare</span>
        </Link>
      </div>
      <div className="additional-help">
        <Link to="/asistenta-alte-intrebari" className="help-link">
          <span>Am nevoie de asistenta in legatura cu altceva</span>
        </Link>
      </div>
    </div>
  );
}

export default Payments;

