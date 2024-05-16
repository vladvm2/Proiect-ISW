import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './CheckInStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function CheckIn() {
    return (
        <div className="CheckIn-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Tichet de îmbarcare și check-in</h1>
            <div className="faq-list-container">
                <Link to="/rezervareazboruluimeu" className="faq-item">
                    <span>Unde este rezervarea zborului meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/detaliipasaport" className="faq-item">
                    <span>Cand adaug detaliile pasaportului/actului de identitate?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/checkinzbor" className="faq-item">
                    <span>Cum fac check-in pentru zbor?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/carteimbarcare" className="faq-item">
                    <span>Unde gasesc cartea mea de imbarcare?</span>
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

export default CheckIn;


