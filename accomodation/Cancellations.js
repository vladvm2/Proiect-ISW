import React from 'react';
import { Link } from 'react-router-dom'; // Presupunând că folosești react-router pentru navigare
import './CancellationsStyles.css';

function Cancellations() {
  return (
    <div className="cancellations-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Anulări</h1>
      <div className="faq-list-container">
        <Link to="/anularerezervare" className="faq-item">
          <span>Pot să-mi anulez rezervarea?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/taxaanulare" className="faq-item">
          <span>Dacă am nevoie să anulez rezervarea, voi plăti vreo taxă de anulare?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/modificarerezervarenerambursabila" className="faq-item">
          <span>Pot să anulez o rezervare sau sa modific datele unei rezervari cu pret nerambursabil?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/confirmareanulare" className="faq-item">
          <span>Cum stiu daca rezervarea mea a fost anulata?</span>
          <span className="chevron">&gt;</span>
        </Link>
        <Link to="/politicaanulare" className="faq-item">
          <span>Unde pot gasi politica de anulare a proprietatii unde am rezervat?</span>
          <span className="chevron">&gt;</span>
        </Link>
      </div>
      <h2>Asistenta suplimentara</h2>
      <Link to="/asistentaautentificare" className="additional-help">
        <span>Autentificați-vă pentru a primi asistență în legătură cu o rezervare</span>
      </Link>
      <Link to="/asistentaaltele" className="additional-help">
        <span>Am nevoie de asistenta in legatura cu altceva</span>
      </Link>
    </div>
  );
}

export default Cancellations;

