import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './ExtrasStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Extras() {
    return (
        <div className="Extras-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Suplimente</h1>
            <div className="faq-list-container">
                <Link to="/sofersuplimentar" className="faq-item">
                    <span>Ce inseamna "sofer suplimentar"? Trebuie sa platesc pentru a-l adauga??</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/acoperiresuplimentara" className="faq-item">
                    <span>Ce tip de acoperire suplimentara pot achizitiona de la ghiseul de inchirieri?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/scauncopil" className="faq-item">
                    <span>Cum solicit un scaun pentru copil?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/platiresuplimente" className="faq-item">
                    <span>Cum pot plati pentru "suplimente"(scaun copil, soferi suplimentari)?</span>
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

export default Extras;