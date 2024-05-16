import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './RoomTypesStyles.css'; // Asum că vei avea un fișier CSS separat pentru stilizare

function RoomTypes() {
    return (
        <div className="room-types-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Tipuri de camere</h1>
            <div className="faq-list-container">
                <div className="faq-item">
                    <Link to="/diferentacameradublatwin">Care este diferența dintre o cameră dublă și o cameră twin?</Link>
                    <span className="chevron">&gt;</span>
                </div>
                <div className="faq-item">
                    <Link to="/politicaanulare">Ce înseamnă „nerambursabil” și „anulare gratuită”?</Link>
                    <span className="chevron">&gt;</span>
                </div>
                <div className="faq-item">
                    <Link to="/patsuplimentar">Pot sa solicit un pat suplimentar in camera? Vor fi costuri suplimentare?</Link>
                    <span className="chevron">&gt;</span>
                </div>
                <div className="faq-item">
                    <Link to="/patSuplimentar">Poate fi pus la dispozitie un pat suplimentar sau un patut pentru copil?</Link>
                    <span className="chevron">&gt;</span>
                </div>
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

export default RoomTypes;
