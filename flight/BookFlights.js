import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './BookFlightsStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function BookFlights() {
    return (
        <div className="BookFlights-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Rezervări zboruri</h1>
            <div className="faq-list-container">
                <Link to="/zborindependent" className="faq-item">
                    <span>Ce este un zbor cu transfer independent?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/biletecopil" className="faq-item">
                    <span>Pot sa rezerv bilete pentru un copil care calatoreste singur?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/grupmare" className="faq-item">
                    <span>Cum rezerv pentru un grup mai mare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/biletflexibil" className="faq-item">
                    <span>Ce este un bilet flexibil?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/actualizarisms" className="faq-item">
                    <span>Ce sunt actualizarile prin SMS?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/detaliicalator" className="faq-item">
                    <span>Cum sa mi introduc numele in campurile privind detaliile calatorilor?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/calatorifrecventi" className="faq-item">
                    <span>Pot adauga numarul meu pentru calatori frecventi?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/cumplatesc" className="faq-item">
                    <span>Cum pot sa platesc?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/platainrate" className="faq-item">
                    <span>Pot plati in rate?</span>
                    <span className="chevron">&gt;</span>
                </Link>
               
                <Link to="/taxecardcredit" className="faq-item">
                    <span>Percepeti taxe de card de credit?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/calcularizbor" className="faq-item">
                    <span>Cum calculeaza ExplorVoyage emisiile de carbon estimate ale unui zbor?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/serviciuanulare" className="faq-item">
                    <span>Ce este serviciul de anulare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
               
            </div>
            <h2>Asistenta suplimentara</h2>
            <div className="additional-help">
                <span>Autentificați-vă pentru a primi asistență în legătură cu o rezervare</span>
            </div>
            <div className="additional-help">
                <Link to="/help">Am nevoie de asistenta in legatura cu altceva</Link>
            </div>
        </div>
    );
}

export default BookFlights;


