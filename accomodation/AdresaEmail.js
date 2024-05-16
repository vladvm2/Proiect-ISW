import React from 'react';
import './AdresaEmailStyles.css'; // Make sure to name your CSS file accordingly

function AdresaEmail() {
  return (
    <div className="AdresaEmail-container">
      <div className="breadcrumb">
        <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
      </div>
      <h1>De ce adresa de e-mail a proprietății se termină în @property.ExplorVoyage?</h1>
      <p> Pentru fiecare rezervare,ExplorVoyage oferă un e-mail alias unic și anonim, atât pentru dumneavoastră, cât și pentru unitatea de cazare. Toate mesajele trimise la acest e-mail alias vor fi redirecționate la adresa unității de cazare, inclusiv link-uri, imagini și atașamente (până la 15 MB). Din motive de securitate, ExplorVoyage deține un sistem automat de monitorizare a comunicării împotriva conținutului necorespunzător. Acesta include spam și restricționarea anumitor tipuri de fișiere precum: zip, .rar și .exe. Vă rugăm rețineți că toate comunicările prin e-mail generate de unitatea de cazare vor fi trimise prin Booking.com în numele acestora. ExplorVoyage nu poate fi declarat responsabil pentru conținutul comunicărilor. Dacă suspectați că mesajele au un conținut neadecvat, suspicios sau spam, vă rugăm să raportați dând clic pe link-ul din colțul dreapta jos al e-mailului. Aceste comunicări vor fi stocate de ExplorVoyage. ExplorVoyage poate accesa direct aceste comunicări doar la cererea dumneavoastră sau a unității de cazare și dacă este strict necesar, în scopul securității sau al aplicării legii, ca în cazul detectării și prevenirii fraudei.</p>
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

export default AdresaEmail;