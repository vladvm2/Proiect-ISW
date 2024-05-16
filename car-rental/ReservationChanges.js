import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './ReservationChangesStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function ReservationChanges() {
    return (
        <div className="ReservationChanges-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Modificarea rezervării</h1>
            <div className="faq-list-container">
                <Link to="/iaranularerezervare" className="faq-item">
                    <span>Ce se intampla daca trebuie sa-mi anulez rezervarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/cumanulezrezervarea" className="faq-item">
                    <span>Cum imi anulez rezervarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/accesareonline" className="faq-item">
                    <span>Cum imi accesez rezervarea online?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/schimbarerezervare" className="faq-item">
                    <span>Cum imi pot schimba rezervarea?</span>
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

export default ReservationChanges;
