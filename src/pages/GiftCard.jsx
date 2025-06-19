import React, { useState } from 'react';
import '../styles/GiftCard.css';
//import useDevice from '../hooks/useDevice';

const VALID_CODES = {
  'LL-2024-001': 100,
  'LL-2024-002': 50,
};

export default function GiftCard() {
  const [inputCode, setInputCode] = useState('');
  const [giftCard, setGiftCard] = useState(null); // holds { code, balance }
  const [amountToSpend, setAmountToSpend] = useState('');
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  // Handler to validate and "Load" a card
  function handleLoadCard() {
    const balance = VALID_CODES[inputCode];
    if (balance !== undefined) {
      setGiftCard({ code: inputCode, balance });
      setMessage('');
    } else {
      setMessage('Invalid or unknown gift card code.');
      setGiftCard(null);
    }
  }

  // Handler to spend amount
  function handleSpend() {
    const amount = parseFloat(amountToSpend);
    if (isNaN(amount) || amount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
    if (amount > giftCard.balance) {
      setMessage('Amount exceeds available balance.');
      return;
    }

    // Update history and card balance
    const newBalance = giftCard.balance - amount;
    setHistory([...history, { date: new Date().toLocaleString(), amount, code: giftCard.code }]);
    setGiftCard({ ...giftCard, balance: newBalance });
    setMessage(`Success! You spent $${amount.toFixed(2)}. New balance: $${newBalance.toFixed(2)}`);
    setAmountToSpend('');
  }

  // Reset for new card
  function handleReset() {
    setInputCode('');
    setGiftCard(null);
    setMessage('');
    setAmountToSpend('');
    setHistory([]);
  }

  return (
    <div className="giftcard-container">
      <h1 className="giftcard-title">Gift Card Page</h1>
      {!giftCard ? (
        <div className="giftcard-load">
          <p>Enter your gift card code:</p>
          <input
            className="giftcard-input"
            type="text"
            value={inputCode}
            onChange={e => setInputCode(e.target.value)}
            placeholder="e.g. LL-2024-001"
          />

          <button className="giftcard-btn" onClick={handleLoadCard} style={{ marginLeft: 8 }}>
            Check Balance
          </button>
          {message && <p className="giftcard-message-error">{message}</p>}
        </div>
      ) : (
        <div className="giftcard-details">
          <h2>Gift Card: {giftCard.code}</h2>
          <h3>Balance: ${giftCard.balance.toFixed(2)}</h3>
          <p>Enter amount to spend:</p>
          <input
            className="giftcard-input"
            type="number"
            value={amountToSpend}
            min={1}
            max={giftCard.balance}
            onChange={e => setAmountToSpend(e.target.value)}
          />
          <button className="giftcard-btn" onClick={handleSpend} style={{ marginLeft: 8 }}>
            Spend
          </button>
          <button
            className="giftcard-btn secondary"
            onClick={handleReset}
            style={{ marginLeft: 8 }}
          >
            New Card
          </button>
          {message && <p className="giftcard-message-success">{message}</p>}
          <h4>Redemption History</h4>
          <ul className="giftcard-history">
            {history.map((h, i) => (
              <li key={i}>
                {h.date}: Spent ${h.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
