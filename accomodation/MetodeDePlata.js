import React from 'react';
import { Link } from 'react-router-dom';
import './MetodeDePlataStyles.css'; // Make sure to name your CSS file accordingly

function MetodeDePlata() {
  return (
    <div className="metodeDePlata-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>Ce metode de plată sunt acceptate?</h1>
      <p>Cardurile de credit sunt metoda de plată cel mai des acceptată de către proprietățile listate pe ExplorVoyage. În plus, multe proprietăți solicită utilizatorilor să furnizeze un card de credit valid pentru rezervările fără plată în avans.</p>
      <h2>Plăți online</h2>
      <p>În multe țări, ExplorVoyage mai multe metode de plată alternative (de ex.: PayPal, ApplePay, Klarna) pe lângă cardurile de credit. În unele piețe, Booking.com oferă și metode de plată locale (de ex.: iDeal în Țările de Jos sau Blik în Polonia). Disponibilitatea metodelor de plată digitală poate varia în funcție de țară, regiune și/sau dispozitivul folosit pentru a rezerva. În josul paginii, am listat cele mai des întâlnite metode de plată.</p>
      <h2>Metode de plată flexibile (Cumpărați acum, plătiți mai târziu)</h2>
      <p>În unele țări, ExplorVoyage oferă opțiuni de plată flexibile prin părți terțe precum Affirm, AfterPay și Klarna. Aceste metode le permit călătorilor să împartă o plată în mai multe rate sau să amâne plata pentru o dată ulterioară. Planurile de rate pe termen scurt (de până la 3-4 rate) sunt de obicei fără dobândă, în timp ce finanțarea pe termen lung poate include dobândă.</p>
      <h2>Metode de plată disponibile</h2>
      <p>Disponibilitatea metodelor de plată poate varia în funcție de țară, monedă, regiune și/sau dispozitivul folosit pentru a rezerva.</p>
      <h3>Carduri de credit</h3>
      <p>La nivel global</p>
      <ul>
        <li>MasterCard</li>
        <li>Visa</li>
        <li>American Express</li>
        <li>JCB</li>
        <li>Diners Club</li>
        <li>Discover</li>
        <li>Union Pay</li>
      </ul>
      <p>Franța</p>
      <ul>
        <li>Carte Bancaire</li>
      </ul>
      <h3>Metode de plată digitale</h3>
      <p>La nivel global</p>
      <ul>
        <li>PayPal</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
      </ul>
      <p>America de Nord, NZ/AUS și majoritatea țărilor din UE</p>
      <ul>
        <li>Affirm</li>
        <li>AfterPay</li>
        <li>Klarna</li>
      </ul>
      <p>China</p>
      <ul>
        <li>Alipay</li>
        <li>WeChat Pay</li>
      </ul>
      <p>Germania și Austria</p>
      <ul>
        <li>Sofort Pay Now</li>
      </ul>
      <p>Țările de Jos</p>
      <ul>
        <li>iDeal</li>
      </ul>
      <p>Țările nordice/Scandinavia</p>
      <ul>
        <li>MobilePay</li>
        <li>Trustly</li>
        <li>Vipps</li>
      </ul>
      <p>Polonia</p>
      <ul>
        <li>Blik</li>
      </ul>
      <p>Elveția</p>
      <ul>
        <li>TWINT</li>
      </ul>
      <p>Statele Unite</p>
      <ul>
        <li>Venmo</li>
      </ul>
      <div className="feedback">
        <span>V-a fost de ajutor această informație?</span>
        <span className="feedback-icons">
          <button className="thumb-up">👍</button>
          <button className="thumb-down">👎</button>
        </span>
      </div>
      <h2>Asistență suplimentară</h2>
      <div className="additional-help">
        <Link to="/asistenta-rezervare" className="help-link">
          Autentificați-vă pentru a primi asistență în legătură cu o rezervare
          <span className="chevron">&gt;</span>
        </Link>
      </div>
      <div className="additional-help">
        <Link to="/asistenta-alte-intrebari" className="help-link">
          Am nevoie de asistență în legătură cu altceva
          <span className="chevron">&gt;</span>
        </Link>
      </div>
    </div>
  );
}

export default MetodeDePlata;
