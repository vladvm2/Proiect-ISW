import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './AfterStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function After() {
    return (
        <div className="After-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>După închiriere</h1>
            <div className="faq-list-container">
                <Link to="/rambursarereturnare" className="faq-item">
                    <span>Pot obtine o rambursare daca returnez masina mai devreme?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/incheiereinchiriere" className="faq-item">
                    <span>Ce se intampla daca am o intrebare dupa ce am incheiat inchirierea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/companieinchirieri" className="faq-item">
                    <span>De ce a incasat compania de inchirieri o anumita suma?</span>
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

export default After;


