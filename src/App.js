import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Header from './Header';
import Kids from './Kids';
import Beauty from './Beauty';
import CarouselComponent from './CarouselComponent';
import NewCarouselComponent from './NewCarouselComponent';
import TopSelections from './TopSelections';
import CustomCarouselComponent from './CustomCarouselComponent';
import Clothing from './Clothing'; // Assuming this is the correct import










const MyComponent = () => {
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);
  const [beautyData, setbeautyData] = useState([]);
  

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = async () => {
    try {
      const responseMen = await fetch(`http://localhost:9090/menu/men`);
      const responsewomen = await fetch(`http://localhost:9090/menu/women`);
      const responseKids = await fetch(`http://localhost:9090/menu/kids`);
      const responsebeauty = await fetch(`http://localhost:9090/menu/beauty`);

      const jsonDataMen = await responseMen.json();
      const jsonDataWomen = await responsewomen.json();
      const jsonDataKids = await responseKids.json();
      const jsonDatabeauty = await responsebeauty.json();

      setMenData(jsonDataMen)
      setWomenData(jsonDataWomen)
      setKidsData(jsonDataKids) 
      setbeautyData(jsonDatabeauty)
      
      
      

      

      


      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-container">
      <Header data={{menData:menData, womenData:womenData, kidsData:kidsData,beautyData:beautyData,}} />
      <CarouselComponent />
      <NewCarouselComponent/>
      <TopSelections />
      <CustomCarouselComponent/>
      
      
      
      
      
      <Routes>
        <Route path="/men" element={<Men data={menData} />} />
        <Route path="/women" element={<Women data={womenData} />} />
        <Route path="/kids" element={<Kids data={kidsData} />} />
        <Route path="/beauty" element={<Beauty data={beautyData} />} />
        <Route path="/clothing" element={<Clothing />} />
        
        
        
        

      </Routes>
    </div>
  );
}

export default MyComponent;


