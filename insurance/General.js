import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './GeneralStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function General() {
    return (
        <div className="General-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Asigurare de calatorie-General</h1>
            <div className="faq-list-container">
                <Link to="/anularepolitaa" className="faq-item">
                    <span>Imi pot anula polita?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/plangereasigurare" className="faq-item">
                    <span>Cum pot depune o plangere referitoare la asigurare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/documentedeasigurare" className="faq-item">
                    <span>Unde gasesc documentele de asigurare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/rambursareanularepolita" className="faq-item">
                    <span>Pot obtine o rambursare daca imi anulez polita?</span>
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

export default General;