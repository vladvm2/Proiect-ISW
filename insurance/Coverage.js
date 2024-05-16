import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './CoverageStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Coverage() {
    return (
        <div className="Coverage-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Asigurare de calatorie-Acoperire</h1>
            <div className="faq-list-container">
                <Link to="/politafransiza" className="faq-item">
                    <span>Aceasta polita are fransiza?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/acoperireasigurare" className="faq-item">
                    <span>Ce acopera asigurarea de calatorie</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/acoperire" className="faq-item">
                    <span>Unde sunt acoperit(a)?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/excluderi" className="faq-item">
                    <span>Se aplica excluderi?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/pecineacoperaasigurarea" className="faq-item">
                    <span>Acoperirea este disponibila daca autoritatile avertizeaza impotriva vizitelor la destinatia mea</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/afectiunimedicale" className="faq-item">
                    <span>Afectiunile medicale preexistente sunt acoperite?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/sporturiiarna" className="faq-item">
                    <span>Sporturile de iarna sunt acoperite?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/limitavarstapolita" className="faq-item">
                    <span>Exista limita de varsta pentru polita?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/limitaacoperire" className="faq-item">
                    <span>Unde pot gasi limitele acoperirii?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/bunurifurate" className="faq-item">
                    <span>Sunt acoperit(a) pentru bunuri personale furate sau deteriorate</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/acoperireurgentemedicale" className="faq-item">
                    <span>Sunt acoperit(a) pentru urgente medicale pe durata calatoriei</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/acoperireanularecalatorie" className="faq-item">
                    <span>Sunt acoperit(a) daca este nevoie sa anulez calatoria</span>
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

export default Coverage;
