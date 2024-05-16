import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './SecurityStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Security() {
    return (
        <div className="security-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Securitate și conștientizare</h1>
            <div className="faq-list-container">
                <Link to="/social-engineering" className="faq-item">
                    <span>Ce este ingineria socială?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/avoiding-social-engineering" className="faq-item">
                    <span>Cum pot evita încercările de inginerie socială?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/payment-scam" className="faq-item">
                    <span>Mi s-a cerut recent sa platesc folosind cardul cadou prin telefon. Este in regula?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/reporting-scam" className="faq-item">
                    <span>Cred ca am fost victima unei escrocherii. Ce ar trebui sa fac?</span>
                    <span className="chevron">&gt;</span>
                </Link>
            </div>
            <h2>Asistenta suplimentara</h2>
            <div className="additional-help">
                <Link to="/help">Autentificați-vă pentru a primi asistență în legătură cu o rezervare</Link>
                <span className="chevron">&gt;</span>
            </div>

            <div className="additional-help">
                <Link to="/help">Am nevoie de asistenta in legatura cu altceva</Link>
                <span className="chevron">&gt;</span>
            </div>
            
        </div>
    );
}

export default Security;
