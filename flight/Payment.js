import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './PaymentStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Payment() {
    return (
        <div className="Payment-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Plată</h1>
            <div className="faq-list-container">
                <Link to="/primirefactura" className="faq-item">
                    <span>Pot sa primesc factura?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/platarate" className="faq-item">
                    <span>Pot plati in rate?</span>
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

export default Payment;


