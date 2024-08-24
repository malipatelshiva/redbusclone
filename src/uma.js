// App.js
import React, { useState } from 'react';
import './App.css';
import { AllBusesdata } from './constants';
import { Link, Route, Routes } from 'react-router-dom';

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
  const [searchQuery, setSearchQuery] = useState('');

  const handleFromLocationChange = (event) => {
    const newFromLocation = event.target.value;
    if (newFromLocation !== toLocation) {
      setFromLocation(newFromLocation);
      filterBuses(newFromLocation, toLocation);
    }
  };

  const handleToLocationChange = (event) => {
    const newToLocation = event.target.value;
    if (newToLocation !== fromLocation) {
      setToLocation(newToLocation);
      filterBuses(fromLocation, newToLocation);
    }
  };

  const filterBuses = (from, to) => {
    const filteredBuses = AllBusesdata.filter(
      (bus) => bus.from === from && bus.to === to
    );
    setDisplayBuses(filteredBuses);
  };

  const handleAddToRightContainer = (bus) => {
    if (selectedBus !== bus) {
      setSelectedBus(bus);
    }
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

  return (
    <div className="app-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <div>
              {/* Location selection dropdowns */}
              <div>
                <label htmlFor="fromLocation">From: </label>
                <select
                  id="fromLocation"
                  value={fromLocation}
                  onChange={handleFromLocationChange}
                >
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>
              <div>
                <label htmlFor="toLocation">To: </label>
                <select
                  id="toLocation"
                  value={toLocation}
                  onChange={handleToLocationChange}
                >
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

              {/* Left container for displaying available buses */}
              <LeftContainer>
                <h1>Available Buses</h1>
                <ul>
                  {displayBuses.map((bus, index) => (
                    <li
                      key={index}
                      onClick={() => handleAddToRightContainer(bus)}
                    >
                      <img src={bus.imageUrl} alt={bus.name} />
                      <div>
                        <h2>{bus.name}</h2>
                        <p>From: {bus.from}</p>
                        <p>To: {bus.to}</p>
                        <p>Type: {bus.type}</p>
                        <p>Price: {bus.price}</p>
                        <button disabled={selectedBus === bus}>AddCart</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </LeftContainer>

              {/* Right container for displaying selected bus */}
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

                <h1>Selected Buses</h1>
                <ul>
                  {selectedBus && (
                    <li>
                      <img src={selectedBus.imageUrl} alt={selectedBus.name} />
                      <div>
                        <h2>{selectedBus.name}</h2>
                        <p>From: {selectedBus.from}</p>
                        <p>To: {selectedBus.to}</p>
                        <p>Type: {selectedBus.type}</p>
                        <p>Price: {selectedBus.price}</p>
                        <button onClick={() => setSelectedBus(null)}>
                          Remove
                        </button>
                      </div>
                    </li>
                  )}
                </ul>
              </RightContainer>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default App;