
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { AllBusesdata } from './constants';
import SeatSelection from './SeatSelection';
import Proceed from './Proceed';

import PassengerDetailsForm from './PassengerDetailsForm';
import Payment from './Payment';
import Confirmation from './Confirmation';

const Container = ({ children }) => <div className="container">{children}</div>;
const LeftContainer = ({ children }) => <div className="left-container">{children}</div>;
const RightContainer = ({ children }) => <div className="right-container">{children}</div>;

const App = () => {
 const [displayBuses, setDisplayBuses] = useState(AllBusesdata);
 const [selectedBus, setSelectedBus] = useState(AllBusesdata[0]);
 const [fromLocation, setFromLocation] = useState('Hyderabad');
 const [toLocation, setToLocation] = useState('Bangalore');
 const [helpMenuVisible, setHelpMenuVisible] = useState(false);
 const [accountMenuVisible, setAccountMenuVisible] = useState(false);
 const [passengerDetails, setPassengerDetails] = useState({});
 const [selectedSeats, setSelectedSeats] = useState([]);
 const [paymentStatus, setPaymentStatus] = useState(false);
 const [pnrNumber, setPNRNumber] = useState('');
 const [searchQuery, setSearchQuery] = useState('');

 const handleFromLocationChange = (event) => {
   setFromLocation(event.target.value);
   filterBuses(event.target.value, toLocation);
 };

 const handleToLocationChange = (event) => {
   setToLocation(event.target.value);
   filterBuses(fromLocation, event.target.value);
 };

 const filterBuses = (from, to) => {
   const filteredBuses = AllBusesdata.filter((bus) => bus.from === from && bus.to === to);
   setDisplayBuses(filteredBuses);
 };

 const handleAddToRightContainer = (bus) => {
   setSelectedBus(bus);
   localStorage.setItem('selectedBus', JSON.stringify(bus));
 };

 const toggleHelpMenu = () => {
   setHelpMenuVisible(!helpMenuVisible);
   setAccountMenuVisible(false);
 };

 const toggleAccountMenu = () => {
   setAccountMenuVisible(!accountMenuVisible);
   setHelpMenuVisible(false);
 };

 const handleSearchChange = (event) => {
   setSearchQuery(event.target.value);
   filterBusesByName(event.target.value);
 };

 const filterBusesByName = (query) => {
   const filteredBuses = AllBusesdata.filter((bus) =>
     bus.name.toLowerCase().includes(query.toLowerCase())
   );
   setDisplayBuses(filteredBuses);
 };

 const handlePassengerDetailsSubmit = (details) => {
   setPassengerDetails(details);
 };

 const handleSeatSelection = (seats) => {
   setSelectedSeats(seats);
 };

 const handlePayment = () => {
   setPaymentStatus(true);
   generatePNR();
 };

 const generatePNR = () => {
   const randomPNR = Math.floor(100000 + Math.random() * 900000);
   setPNRNumber(randomPNR);
 };





 return (
   
     <div className="app-container">
       <div>
         <label htmlFor="fromLocation">From: </label>
         <select id="fromLocation" value={fromLocation} onChange={handleFromLocationChange}>
           <option value="Hyderabad">Hyderabad</option>
           <option value="Bangalore">Bangalore</option>
           <option value="Pune">Pune</option>
         </select>
       </div>
       <div>
         <label htmlFor="toLocation">To: </label>
         <select id="toLocation" value={toLocation} onChange={handleToLocationChange}>
           <option value="Bangalore">Bangalore</option>
           <option value="Hyderabad">Hyderabad</option>
           <option value="Pune">Pune</option>
         </select>
       </div>
       <input
         type="text"
         placeholder="Search buses..."
         value={searchQuery}
         onChange={handleSearchChange}
       />

       <LeftContainer>
         <h1>Available Buses</h1>
         <ul>
           {displayBuses.map((bus, index) => (
             <li key={index} onClick={() => handleAddToRightContainer(bus)}>
               <img key={index} src={bus.imageUrl} alt={bus.name} />
               <div>
                 <h2>{bus.name}</h2>
                 <p>From: {bus.from}</p>
                 <p>To: {bus.to}</p>
                 <p>Type: {bus.type}</p>
                 <p>Price: {bus.price}</p>
                 <button>Book</button>
               </div>
             </li>
           ))}
         </ul>
       </LeftContainer>

       <RightContainer>
         <div className="top-side">
           <button onClick={toggleHelpMenu}>Help</button>
           {helpMenuVisible && (
             <div className="dropdown-menu">
               <ul>
                 <button>Cancel Ticket</button>
                 <button>Change Travel Date</button>
                 <button>Show My Ticket</button>
                 <button>Email/SMS</button>
               </ul>
             </div>
           )}
           <button onClick={toggleAccountMenu}>Account</button>
           {accountMenuVisible && (
             <div className="dropdown-menu">
               <ul>
                 <button>Login/Signup</button>
               </ul>
             </div>
           )}
         </div>

         <Routes>
  <Route path="/seat-selection" element={<SeatSelection onSelectSeats={handleSeatSelection} />} />
  <Route path="/passenger-details" element={<PassengerDetailsForm onSubmit={handlePassengerDetailsSubmit} />} />
  <Route path="/payment" element={!paymentStatus && <Payment totalAmount={selectedSeats.length * selectedBus.price} onPayment={handlePayment} />} />
  <Route path="/confirmation" element={paymentStatus && <Confirmation passengerDetails={passengerDetails} selectedBus={selectedBus} selectedSeats={selectedSeats} pnrNumber={pnrNumber} />} />
  <Route path="/proceed" element={<Proceed />} />

  <Route path="/" element={
    <>
      <h1>Selected Buses</h1>
      <ul>
        {selectedBus && (
          <li key="1">
            <img src={selectedBus.imageUrl} alt={selectedBus.name} />
            <div>
              <h2>{selectedBus.name}</h2>
              <p>From: {selectedBus.from}</p>
              <p>To: {selectedBus.to}</p>
              <p>Type: {selectedBus.type}</p>
              <p>Price: {selectedBus.price}</p>
            </div>
          </li>
        )}
      </ul>
    </>
  } />
</Routes>

         <nav>
           <ul>
             <li>
               <Link to="/seat-selection">Seat Selection</Link>
             </li>
             <li>
               <Link to="/passenger-details">Passenger Details</Link>
             </li>
             <li>
               <Link to="/payment">Payment</Link>
             </li>
             <li>
               <Link to="/confirmation">Confirmation</Link>
             </li>
             <li>
             <li>
              <Link to="/proceed"><button>Proceed</button></Link>
            </li>             </li>
             
            
           </ul>
         </nav>
       </RightContainer>
     </div>
   
 );
};
export default App;