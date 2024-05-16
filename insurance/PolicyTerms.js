import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './PolicyTermsStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function PolicyTerms() {
    return (
        <div className="PolicyTerms-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Asigurare de calatorie-Termenii poliței</h1>
            <div className="faq-list-container">
                <Link to="/incepereasigurare" className="faq-item">
                    <span>Cand incepe si cand se incheie asigurarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/gasiredocumenteasigurare" className="faq-item">
                    <span>Nu mi am primit documentele de asigurare. Unde le pot gasi?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/rezervaricalatorie" className="faq-item">
                    <span>Calatoria mea include una sau mai multe rezervari pe care nu le-am facut cu ExplorVoyage. Sunt acoperit(a)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/potmodificaasigurarea" className="faq-item">
                    <span>Imi pot modifica asigurarea?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/schimbarepersoanaasigurata" className="faq-item">
                    <span>Odata ce am cumparat asigurarea, pot schimba persoana asigurata - sau pot asigura calatori calatori suplimentari?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/schimbaredatecalatorie" className="faq-item">
                    <span>Daca imi schimb datele calatoriei, sunt in continuare acoperit(a)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/acoperireschimbaredestinatie" className="faq-item">
                    <span>Daca imi schimb destinatia, mai sunt acoperit(a)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/acoperiremodificarecalatorie" className="faq-item">
                    <span>Daca imi modific calatoria, mai sunt acoperit(a)?</span>
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

export default PolicyTerms;