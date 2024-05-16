import React, { useState } from 'react';

import './ResendConfirmationStyles.css'; // Asigură-te că acest fișier există și este stilizat corespunzător.

function ResendConfirmation() {
    const [email, setEmail] = useState('');
    // `navigate` este declarat dar nu folosit în acest fragment de cod, așa că îl vom comenta
    // Dacă ai nevoie de navigație la submit, poți decomenta și utiliza
    // const navigate = useNavigate();

    const handleResendEmail = (event) => {
        event.preventDefault();
        // Aici ai adăuga logica pentru retrimiterea email-ului
        // Dacă ai nevoie să navighezi la altă pagină după retrimitere, utilizează `navigate`
        // Exemplu: navigate('/some-success-page');
    };

    return (
        <div className="resend-confirmation-container">
            <h2>Retrimiterea e-mailului de confirmare</h2>
            <p>Nu găsiți rezervarea de cazare? Introduceți adresa de e-mail pe care ați folosit-o pentru a face rezervarea, iar noi vă vom retrimite e-mailul de confirmare.</p>
            <form onSubmit={handleResendEmail} className="resend-form">
                <div className="form-group">
                    <label htmlFor="email">Adresa dvs. de e-mail *</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="resend-email-button">Retrimite e-mail</button>
            </form>
        </div>
    );
}

export default ResendConfirmation;
