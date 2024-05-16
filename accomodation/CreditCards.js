import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './CreditCardsStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function CreditCards() {
    return (
        <div className="credit-cards-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Carduri de credit</h1>
            <div className="faq-list-container">
                <Link to="/debit-card-reservation" className="faq-item">
                    <span>Pot folosi un card de debit pentru a face rezervarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/reservation-without-credit-card" className="faq-item">
                    <span>Pot să fac o rezervare fără card de credit?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/preauthorization-vs-debit" className="faq-item">
                    <span>Care este diferenta dintre o preautorizare si o debitare concreta a cardului meu de credit?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/preauthorization-notification" className="faq-item">
                    <span>Cum voi sti daca va fi preautorizat cardul meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/reservation-using-another-card" className="faq-item">
                    <span>Pot face o rezervare pentru mine folosind cardul de credit al altei persoane?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/preauthorization-hold-duration" className="faq-item">
                    <span>Cat timp va afecta preautorizarea soldul meu disponibil?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/credit-card-details" className="faq-item">
                    <span>De ce trebuie sa dau detalii despre cardul meu de credit?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/held-amount-vs-reservation-amount" className="faq-item">
                    <span>Suma retinuta va fi intotdeauna egala cu suma rezervarii mele?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/preauthorization-for-all-reservations" className="faq-item">
                    <span>Acest lucru se va intampla cu toate rezervarile facute prin ExplorVoyage?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/update-credit-card-details" className="faq-item">
                    <span>Am primit un nou card de credit si datele mele nu mai sunt valabile. Ce trebuie sa fac?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/unexpected-charges" className="faq-item">
                    <span>De ce mi s-a incasat?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/what-is-preauthorization" className="faq-item">
                    <span>Ce inseamna preautorizare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/accepted-credit-cards" className="faq-item">
                    <span>Ce tipuri de card de credit pot folosi pentru a face o rezervare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/reservation-security" className="faq-item">
                    <span>Cum imi securizati rezervarea?</span>
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

export default CreditCards;
