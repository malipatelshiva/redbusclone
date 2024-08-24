// ./pages/MegaSummerSale.js
import React from 'react';

const MegaSummerSale = () => {
  const handleClick = () => {
    window.open('/megasummersale', '_blank');
  };

  return (
    <div>
      <h1>Mega Summer Sale</h1>
      <button onClick={handleClick}>Open Mega Summer Sale in New Tab</button>
      
      {/* Add your content for the Mega Summer Sale page here */}
    </div>
  );
};

export default MegaSummerSale;