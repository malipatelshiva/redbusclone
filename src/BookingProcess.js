// import React, { useState } from 'react';
// import SeatSelection from './SeatSelection';
// import PassengerDetailsForm from './PassengerDetailsForm';
// import Payment from './Payment';
// import Confirmation from './Confirmation';

// const BookingProcess = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [passengerDetails, setPassengerDetails] = useState({});
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [pnrNumber, setPNRNumber] = useState('');

//   const handleSeatSelection = (seats) => {
//     setSelectedSeats(seats);
//     setCurrentStep(2);
//   };

//   const handlePassengerDetailsSubmit = (details) => {
//     setPassengerDetails(details);
//     setCurrentStep(3);
//   };

//   const handlePayment = () => {
//     setPaymentStatus(true);
//     generatePNR();
//     setCurrentStep(4);
//   };

//   const generatePNR = () => {
//     const randomPNR = Math.floor(100000 + Math.random() * 900000);
//     setPNRNumber(randomPNR);
//   };
 






//   return (
//     <div>
//       <h2>Booking Process</h2>
//       {currentStep === 1 && <SeatSelection onSelectSeats={handleSeatSelection} />}
//       {currentStep === 2 && <PassengerDetailsForm onSubmit={handlePassengerDetailsSubmit} />}
//       {currentStep === 3 && !paymentStatus && (
//         <Payment totalAmount={selectedSeats.length * selectedBus.price} onPayment={handlePayment} />
//       )}
//       {currentStep === 4 && paymentStatus && (
//         <Confirmation
//           passengerDetails={passengerDetails}
//           selectedBus={selectedBus}
//           selectedSeats={selectedSeats}
//           pnrNumber={pnrNumber}
//         />
//       )}
//     </div>
//   );
// };

// export default BookingProcess;