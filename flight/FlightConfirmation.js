import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './FlightConfirmationStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function FlightConfirmation() {
    return (
        <div className="FlightConfirmation-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Confirmarea zborului</h1>
            <div className="faq-list-container">
                <Link to="/emailconfirmare" className="faq-item">
                    <span>Nu imi gasesc e-mailul de confirmare. Cum trebuie sa procedez?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/biletzbor" className="faq-item">
                    <span>Unde imi gasesc biletul de zbor?</span>
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

export default FlightConfirmation;



