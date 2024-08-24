// Confirmation.js

import React from 'react';

const Confirmation = ({ passengerDetails, selectedBus, selectedSeats, pnrNumber }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Passenger Name: {passengerDetails.name}</p>
      <p>Contact Number: {passengerDetails.contactNumber}</p>
      <p>Email: {passengerDetails.email}</p>
      <p>Selected Bus: {selectedBus.name}</p>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>PNR Number: {pnrNumber}</p>
    </div>
  );
};

export default Confirmation;
