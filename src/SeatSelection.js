// SeatSelection.js

import React, { useState } from 'react';

const SeatSelection = ({ onSelectSeats }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleConfirmSeats = () => {
    onSelectSeats(selectedSeats);
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div>
        <p>Available Seats: A1, A2, B1, B2</p>
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <div>
          <button onClick={() => handleSeatClick('A1')} disabled={selectedSeats.includes('A1')}>A1</button>
          <button onClick={() => handleSeatClick('A2')} disabled={selectedSeats.includes('A2')}>A2</button>
          <button onClick={() => handleSeatClick('B1')} disabled={selectedSeats.includes('B1')}>B1</button>
          <button onClick={() => handleSeatClick('B2')} disabled={selectedSeats.includes('B2')}>B2</button>
        </div>
        <button onClick={handleConfirmSeats}>Confirm Seats</button>
      </div>
    </div>
  );
};

export default SeatSelection;
