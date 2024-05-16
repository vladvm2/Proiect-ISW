import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './MyFlightStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function MyFlight() {
    return (
        <div className="MyFlight-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Rezervarea zborului meu</h1>
            <div className="faq-list-container">
                <Link to="/protectie" className="faq-item">
                    <span>Rezervarea mea are protectie ATOL?(doar pentru clientii din Regatul Unit)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/escala" className="faq-item">
                    <span>Am o escala indeajuns de lunga pentru a ajunge la urmatorul zbor?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/zborulmeu" className="faq-item">
                    <span>Cum aflu daca zborul meu decoleaza la timp?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/schimbareora" className="faq-item">
                    <span>De ce s-a schimbat ora zborului meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/solicitaredauna" className="faq-item">
                    <span>Cum pot depune o solicitare de dauna asociata asigurarii de calatorie?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/ryanair" className="faq-item">
                    <span>De ce imi cere Ryanair sa imi confirm identitatea?</span>
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

export default MyFlight;




