import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './TravelPlansStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function TravelPlans() {
    return (
        <div className="TravelPlans-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Combustibil, kilometraj și planuri de călătorie</h1>
            <div className="faq-list-container">
                <Link to="/numarnelimitat" className="faq-item">
                    <span>Masina mea beneficiaza de un numar nelimitat de kilometri?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/tipcombustibil" className="faq-item">
                    <span>Cum aflu ce tip de combustibil este potrivit pentru masina mea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/politicacombustibil" className="faq-item">
                    <span>Ce este politica privind combustibilul?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/masinaaltatara" className="faq-item">
                    <span>Dar daca vreau sa merg cu masina inchiriata in alta tara?</span>
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

export default TravelPlans;