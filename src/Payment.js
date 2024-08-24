import React, { useState } from 'react';

const Payment = ({ totalAmount, onPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    // Perform payment action here
    // You can access the selected payment method via `paymentMethod`
    // and total amount via `totalAmount`
    // Then you can call `onPayment` function to handle the payment
    onPayment(paymentMethod, totalAmount);
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <p>Total Amount: ${totalAmount}</p>
      <div className="payment-methods">
        <div className="form-group">
          <label htmlFor="card">Credit/Debit Card</label>
          <input
            type="text"
            id="card"
            placeholder="Enter card number"
            value={paymentMethod === 'card' ? paymentMethod : ''}
            onChange={handlePaymentMethodChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="net-banking">Net Banking</label>
          <select
            id="net-banking"
            value={paymentMethod === 'net-banking' ? paymentMethod : ''}
            onChange={handlePaymentMethodChange}
          >
            <option value="">Select Bank</option>
            <option value="bank1">Bank 1</option>
            <option value="bank2">Bank 2</option>
            {/* Add more bank options */}
          </select>
        </div>
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;

