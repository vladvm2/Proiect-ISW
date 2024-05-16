import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './PickupStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Pickup() {
    return (
        <div className="Pickup-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Preluare și predare</h1>
            <div className="faq-list-container">
                <Link to="/ghiseuinchirieri" className="faq-item">
                    <span>Cum gasesc ghiseul de inchirieri?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/predaremasinainchiriere" className="faq-item">
                    <span>Cum predau masina la sfarsitul perioadei de inchiriere?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/perceperesuma" className="faq-item">
                    <span>Compania de inchirieri imi va percepe vreo suma de bani la predarea masinii?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/momentpreluare" className="faq-item">
                    <span>Va trebui sa platesc ceva la momentul preluarii masinii?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/zborintarziat" className="faq-item">
                    <span>Ce se intampla daca zborul meu are intarziere sau este anulat?</span>
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

export default Pickup;
