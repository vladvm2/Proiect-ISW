import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindReservationStyles.css'; // Acest fișier CSS trebuie să existe și să fie stilizat corespunzător

function FindReservation() {
    const [confirmationNumber, setConfirmationNumber] = useState('');
    const [pinCode, setPinCode] = useState('');
    const navigate = useNavigate();

    const handleFindReservation = (event) => {
        event.preventDefault();
        // Aici vei adăuga logica pentru a verifica rezervarea
    };

    const handleAuthClick = () => {
        navigate('/login'); // Navighează către pagina de autentificare
    };

    const handleResendEmailClick = () => {
        navigate('/resendconfirmation'); // Navighează către pagina de retrimitere email
    };

    return (
        <div className="find-reservation-container">
            <h2>Introduceți detaliile rezervării</h2>
            <form onSubmit={handleFindReservation} className="reservation-form">
                <div className="form-group">
                    <label htmlFor="confirmationNumber">Număr confirmare *</label>
                    <input
                        type="text"
                        id="confirmationNumber"
                        name="confirmationNumber"
                        value={confirmationNumber}
                        onChange={(e) => setConfirmationNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pinCode">Cod PIN *</label>
                    <input
                        type="password"
                        id="pinCode"
                        name="pinCode"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="continue-button">Continuați</button>
            </form>
            <div className="reservation-help">
                <button className="help-action resend" onClick={handleResendEmailClick}>
                    Retrimite e-mailul de confirmare
                </button>
                <button className="help-action auth" onClick={handleAuthClick}>
                    Autentificare
                </button>
            </div>
        </div>
    );
}

export default FindReservation;
