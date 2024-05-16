import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './AskedQuestions.css'; // Asum că ai un fișier CSS separat pentru stilizare

function AskedQuestions() {
    return (
        <div className="AskedQuestions-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Facilități suplimentare</h1>
            <div className="faq-list-container">
                <Link to="/confirmarerezervare" className="faq-item">
                    <span>Ce se intampla daca nu am primit confirmarea rezervarii?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                {/* Repetă structura de mai jos pentru fiecare întrebare */}
                <Link to="/preluareamasinii" className="faq-item">
                    <span>Va trebui sa platesc ceva la momentul preluarii masinii?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/accesarerezervare" className="faq-item">
                    <span>Cum imi accesez rezervarea online?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/anularerezervare" className="faq-item">
                    <span>Ce se intampla daca vreau sa mi anulez rezervarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/masinainchiriata" className="faq-item">
                    <span>Dar daca vreau sa merg cu masina inchiriata in alta tara?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/garantia" className="faq-item">
                    <span>Ce inseamna Garantia "Echivalam preturile" si cum functioneaza?</span>
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

export default AskedQuestions;
