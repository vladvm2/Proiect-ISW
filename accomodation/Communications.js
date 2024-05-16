// Communications.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CommunicationsStyles.css'; // Asum că vei avea un fișier CSS separat

function Communications() {
    return (
        <div className="communications-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Comunicări</h1>
            <div className="faq-list-container">
                <Link to="/adresaemail" className="faq-item"> {/* Modifică '/adresa-email' cu calea corectă */}
                    <span>De ce adresa de e-mail a proprietății se termină în @property.ExplorVoyage?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Adaugă restul întrebărilor aici, dacă e nevoie */}
            </div>
            <h2>Asistență suplimentară</h2>
            <div className="additional-help">
                <span>Autentificați-vă pentru a primi asistență în legătură cu o rezervare</span>
            </div>
            <div className="additional-help">
                <span>Am nevoie de asistență în legătură cu altceva</span>
            </div>
        </div>
    );
}

export default Communications;
