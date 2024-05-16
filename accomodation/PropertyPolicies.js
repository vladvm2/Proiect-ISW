import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './PropertyPoliciesStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function PropertyPolicies() {
    return (
        <div className="property-policies-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Politici ale proprietății</h1>
            <div className="faq-list-container">
                <Link to="/late-checkout-policy" className="faq-item">
                    <span>Doresc să eliberez camera după ora de check-out menționată. Ce trebuie să fac?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/checkin-checkout-hours" className="faq-item">
                    <span>Care sunt orele de check-in și check-out ale unei proprietăți?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/property-facilities" className="faq-item">
                    <span>Cum obtin mai multe informatii despre facilitatile disponibile?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/smoking-room-request" className="faq-item">
                    <span>Doresc o camera pentru fumatori, dar pot sa selectez doar o camera pentru nefumatori. Cum pot solicita o camera pentru fumatori?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/early-late-checkin" className="faq-item">
                    <span>Voi ajunge mai devreme/mai tarziu decat ora de check-in mentionata. Ma voi putea caza?</span>
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

export default PropertyPolicies;
