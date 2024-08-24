import React, { useEffect, useState } from 'react';

const Proceed = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage
    const storedSelectedBus = localStorage.getItem('selectedBus');
    debugger
    if (storedSelectedBus) {
      // Parse the JSON string into an object
      setSelectedBus(JSON.parse(storedSelectedBus));
    }
  }, []); // Empty dependency array to run the effect only once when component mounts

  return (
    <div>
      <h1>Proceed Page</h1>
      <div>
        {/* Display bus data if available */}
        {selectedBus && (
          
          
          < >
            <h2>{selectedBus.name}</h2>
            <p>From: {selectedBus.from}</p>
            <p>To: {selectedBus.to}</p>
            <p>Type: {selectedBus.type}</p>
            <p>Price: {selectedBus.price}</p>
          </>
        )}
      </div>
      <button>Proceed</button>
      <p>This is the proceed page content.</p>
    </div>
  );
};

export default Proceed;
