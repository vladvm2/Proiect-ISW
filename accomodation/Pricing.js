import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './PricingStyles.css'; // Asum că ai un fișier CSS separat

function Pricing() {
    return (
        <div className="pricing-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Prețuri</h1>
            <div className="faq-list-container">
                <Link to="/pricing-breakfast" className="faq-item">
                    <span>Este micul dejun inclus în preț?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/pricing-inclusions" className="faq-item">
                    <span>Ce include prețul?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pricing-person-or-room" className="faq-item">
                    <span>Preturile de pe ExplorVoyage sunt pe persoana sau pe camera?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pricing-room-taxes" className="faq-item">
                    <span>Sunt taxe incluse in pretul camerei?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pricing-reservation-commission" className="faq-item">
                    <span>Platesc comision pentru rezervare la ExplorVoyage?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pricing-slashed-price" className="faq-item">
                    <span>Ce inseamna pretul taiat langa tipul camerei mele?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pricing-discount-vouchers" className="faq-item">
                    <span>Pot folosi vouchere de discount(emise de reviste,magazine)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pricing-child-full-price" className="faq-item">
                    <span>Platesc pretul integral pentru copilul meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
            </div>

            <h2>Asistenta suplimentara</h2>
            <div className="additional-help">
                <Link to="/login">Autentificați-vă pentru a primi asistență în legătură cu o rezervare</Link>
            </div>
            <div className="additional-help">
                <Link to="/help">Am nevoie de asistenta in legatura cu altceva</Link>
            </div>
        </div>
    );
}

export default Pricing;

