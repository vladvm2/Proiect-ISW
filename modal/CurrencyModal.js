import React from 'react';
import './CurrencyModalStyles.css'; // Asigură-te că calea este corectă către stilurile CSS

function CurrencyModal({ toggleCurrencyModal, setCurrency, currentCurrency }) {
  const currencies = [
    'EUR', 'USD', 'GBP', 'BGN', 'TRY', 'HUF', 'RON', 'THB', 'CZK',
    'DKK', 'ISK', 'NOK', 'SEK', 'BHD', 'JOD', 'KWD', 'AED', 'CAD',
    'HKD', 'NZD', 'TWD', 'FJD', 'NAD', 'CHF', 'UAH', 'GEL', 'MDL',
    'EGP', 'GBP', 'AZN', 'ARS', 'CLP', // adaugă restul valutelor după nevoie
  ];

  const selectCurrency = (currency) => {
    setCurrency(currency);
    toggleCurrencyModal(); // Acesta ar trebui să fie un handler pentru a închide modalul
  };

  return (
    <div className="currency-modal">
      <div className="currency-modal-content">
        <button className="close" onClick={toggleCurrencyModal}>&times;</button>
        <h2>Select Currency</h2>
        <ul className="currency-list">
          {currencies.map((currency, index) => (
            <li key={index} 
                className={currency === currentCurrency ? 'selected' : ''}
                onClick={() => selectCurrency(currency)}>
              {currency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CurrencyModal;
