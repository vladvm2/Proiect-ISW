import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './AdditionalFacilitiesStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function AdditionalFacilities() {
    return (
        <div className="additional-facilities-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Facilități suplimentare</h1>
            <div className="faq-list-container">
                <Link to="/parking-reservation" className="faq-item">
                    <span>Cum știu dacă există parcare la proprietate și cum pot rezerva un loc?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/specific-facilities" className="faq-item">
                    <span>Cum pot afla dacă o proprietate are o anumită facilitate (de exemplu, un lift)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/transfer-services" className="faq-item">
                    <span>Cum pot afla dacă proprietatea ofera servicii de transfer si cum pot face rezervare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/luggage-storage" className="faq-item">
                    <span>Poate proprietatea sa imi depoziteze bagajul inainte de check-in sau dupa check-out?</span>
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

export default AdditionalFacilities;
