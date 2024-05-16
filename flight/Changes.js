import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './ChangesStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Changes() {
    return (
        <div className="Changes-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Modificări și anulare</h1>
            <div className="faq-list-container">
                <Link to="/schimbarenume" className="faq-item">
                    <span>Pot sa schimb numele din bilet?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/detaliirezervare" className="faq-item">
                    <span>De ce nu pot vedea modificarile pe care le-am facut privind detaliile rezervarii de zbor?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/procesrambursare" className="faq-item">
                    <span>Care este procesul de rambursare?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/efectuarerambursare" className="faq-item">
                    <span>In cat timp se va efectua rambursarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/biletdeschis" className="faq-item">
                    <span>Am primit un voucher/bilet deschis. Cum functioneaza?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/schimbarezbor" className="faq-item">
                    <span>Pot sa-mi schimb zborul?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/biletflexibil" className="faq-item">
                    <span>Cum imi schimb zborul cu un bilet flexibil?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/adaugarebebelus" className="faq-item">
                    <span>Pot sa adaug un bebelus la rezervarea mea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/potanulazborul" className="faq-item">
                    <span>Pot sa-mi anulez zborul?</span>
                    <span className="chevron">&gt;</span>
                </Link>
               
                <Link to="/primirerambursare" className="faq-item">
                    <span>Primesc o rambursare daca zborul meu este anulat?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/calcularizbor" className="faq-item">
                    <span>Cum calculeaza ExplorVoyage emisiile de carbon estimate ale unui zbor?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/serviciuanularezbor" className="faq-item">
                    <span>Cum imi anulez zborul cu serviciul de anulare?</span>
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

export default Changes;

