import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './PayStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Pay() {
    return (
        <div className="Pay-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Plată, taxe și confirmare</h1>
            <div className="faq-list-container">
                <Link to="/depozitulmeu" className="faq-item">
                    <span>Cat costa depozitul meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/numarreferinta" className="faq-item">
                    <span>Ce reprezinta numarul de referinta al rezervarii mele?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/platiredepozit" className="faq-item">
                    <span>De ce trebuie sa platesc un depozit la ghiseul de inchirieri?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/platiresmasina" className="faq-item">
                    <span>Cum platesc pentru masina?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/primireconfirmarerezervare" className="faq-item">
                    <span>Ce se intampla daca nu am primit confirmarea rezervarii?</span>
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

export default Pay;
