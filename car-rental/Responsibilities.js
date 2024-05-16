import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './ResponsibilitiesStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Responsibilities() {
    return (
        <div className="Responsibilities-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Responsabilitățile și cerințele privind șoferul</h1>
            <div className="faq-list-container">
                <Link to="/inchirieremasina" className="faq-item">
                    <span>Pot inchiria o masina daca nu am card de credit?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/preluareamasinii" className="faq-item">
                    <span>Ce trebuie sa iau la mine pentru a prelua masina?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/masinasub" className="faq-item">
                    <span>Cum pot inchiria o masina daca am sub 30 de ani?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/masinapeste" className="faq-item">
                    <span>Pot inchiria o masina daca am peste 65 de ani?</span>
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

export default Responsibilities;

