import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './ClaimsStyles.css'; // Asum că ai un fișier CSS separat pentru stilizare

function Claims() {
    return (
        <div className="Claims-container">
            <div className="breadcrumb">
                <span>Centru de asistență</span> &gt; <span>Întrebări frecvente</span>
            </div>
            <h1>Asigurare de calatorie-Solicitari</h1>
            <div className="faq-list-container">
                <Link to="/altfurnizor" className="faq-item">
                    <span>Dacă deja am asigurare de anulare cu un alt furnizor și de asemenea am luat această asigurare prin ExplorVoyage, cu ce asigurător trebuie să raportez o potențială reclamație?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                
                <Link to="/gripa" className="faq-item">
                    <span>Am gripă și nu pot merge în călătoria mea din cauza acesteia. Cu toate acestea, nu am fost la doctor. Ce trebuie să fac?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/scurtarecalatorie" className="faq-item">
                    <span>Dacă trebuie să-mi scurtez călătoria / șederea după ce m-am cazat, sunt acoperit(ă) pentru costul porțiunii neutilizate?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/repatriere" className="faq-item">
                    <span>Repatrierea după un accident în timpul călătoriei este asigurată?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/reclamatiesucces" className="faq-item">
                    <span>Dacă am o reclamație de succes, cum va fi făcută plata?</span>
                    <span className="chevron">&gt;</span>
                </Link>
                <Link to="/documentereclamatie" className="faq-item">
                    <span>Ce documente sunt necesare pentru a susține o reclamație?</span>
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

export default Claims;



