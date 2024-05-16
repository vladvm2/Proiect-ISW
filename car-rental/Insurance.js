import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './InsuranceStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Insurance() {
    return (
        <div className="Insurance-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Asigurare, acoperire și protecție</h1>
            <div className="faq-list-container">
                <Link to="/fransiza" className="faq-item">
                    <span>Ce inseamna "fransiza" si care este fransiza in cazul meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/asiguraremasina" className="faq-item">
                    <span>De ce asigurare/acoperire beneficiaza masina pe care o inchiriez?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/asigurarefurt" className="faq-item">
                    <span>Ce este asigurarea de furt?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/asigurarepartiala" className="faq-item">
                    <span>Ce este asigurarea partiala in caz de coliziune(CDW)?</span>
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

export default Insurance;