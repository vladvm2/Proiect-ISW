import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './ElectricStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Electric() {
    return (
        <div className="Electric-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Mașini electrice</h1>
            <div className="faq-list-container">
                <Link to="/incarcareelectrica" className="faq-item">
                    <span>Cat dureaza incarcarea unei masini electrice?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/pretincarcare" className="faq-item">
                    <span>Cat costa incarcarea unei masini electrice?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/conduceremasina" className="faq-item">
                    <span>Pe ce distanta se poate conduce o masina electrica per incarcare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/costinchiriere" className="faq-item">
                    <span>Este mai scumpa inchirierea unei masini electrice?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/punctincarcare" className="faq-item">
                    <span>Cum pot gasi cel mai apropiat punct de incarcare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/incarcarezilnica" className="faq-item">
                    <span>Trebuie sa incarc zilnic masina electrica?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/masinielectricebune" className="faq-item">
                    <span>Sunt masinile electrice mai bune pentru mediu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/masiniusordecondus" className="faq-item">
                    <span>Sunt mai usor de condus masinile electrice?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/farabaterie" className="faq-item">
                    <span>Ce se intampla daca masina mea electrica ramane fara baterie pe sosea?</span>
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

export default Electric;


