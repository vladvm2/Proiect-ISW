import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './SeatsStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Seats() {
    return (
        <div className="Seats-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Bagaje și locuri</h1>
            <div className="faq-list-container">
                <Link to="/bagajeluate" className="faq-item">
                    <span>Cate bagaje pot sa iau?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/bagajcala" className="faq-item">
                    <span>Care sunt dimensiunile maxime pentru bagajul de cabina si pentru cel de cala?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/adaugarebagaje" className="faq-item">
                    <span>Pot sa adaug mai multe bagaje la zborul meu?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/bagajespeciale" className="faq-item">
                    <span>Pot sa adaug bagaje speciale sau supradimensionate?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/bagajdemana" className="faq-item">
                    <span>Ce pot sa iau in bagajul de mana?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/mancarebebelusi" className="faq-item">
                    <span>Pot aduce mancare pentru bebelusi si medicamente in bagaj?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/animaldecompanie" className="faq-item">
                    <span>Pot lua un animal de companie cu mine?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/selectarelocuri" className="faq-item">
                    <span>Pot selecta locurile pentru zbor?</span>
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

export default Seats;




