

import React, { useState, useEffect } from 'react';
import './App.css';





const LandBox = ({ imgSrc, altText, title, location, details, price,onClick}) => (
<div className="box" onClick={onClick}>

    <img src={imgSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{details}</p>
      <p>{price}</p>
      

  </div>
);

const Container = ({ children }) => <div className="container">{children}</div>;





const Modal = ({ isOpen, onClose, children,onSort}) => {
    if (!isOpen) return null;













  
    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>Close</button>
            {children}
          </div>
        </div>
      );
    };



  









const App = () => {

    const [isBottom, setIsBottom] = useState(false);


    const [landBoxData, setlandBoxData] = useState([
        {

            imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
            altText: "Vegitables",
            title: "LadyFigers",
            location: "hyd",
            details: "1kg",
            price: 20
        },
        {

            imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
            altText: "Vegitables",
            title: "LadyFigers",
            location: "hyd",
            details: "1kg",
            price: 40
        },
        {

            imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
            altText: "Vegitables",
            title: "LadyFingers",
            location: "hyd",
            details: "1kg",
            price: 35
        },
        {

            imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
            altText: "Fruits",
            title: "LadyFingers",
            location: "hyd",
            details: "1kg",
            price: 45
        },{

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Fruits",
          title: "LadyFigers",
          location: "hyd",
          details: "1kg",
          price: 20
      },
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Fruits",
          title: "LadyFigers",
          location: "hyd",
          details: "1kg",
          price: 40
      },
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Fruits",
          title: "LadyFingers",
          location: "hyd",
          details: "1kg",
          price: 35
      },
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Vegitables",
          title: "LadyFingers",
          location: "hyd",
          details: "1kg",
          price: 45
      }
        // Add more objects as needed
    ]);

    const [selectedlandBoxData, setselectedlandBoxData] = useState({

        imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
        altText: "Vegitables",
        title: "LadyFingers",
        location: "hyd",
        details: "1kg",
        price: 55
    })

    const [displayData,setDisplayData] = useState([
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Vegitables",
          title: "LadyFigers",
          location: "hyd",
          details: "1kg",
          price: 20
      },
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Vegitables",
          title: "LadyFigers",
          location: "hyd",
          details: "1kg",
          price: 40
      },
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Vegitables",
          title: "LadyFingers",
          location: "hyd",
          details: "1kg",
          price: 35
      },
      {

          imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
          altText: "Fruits",
          title: "LadyFingers",
          location: "hyd",
          details: "1kg",
          price: 45
      },{

        imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
        altText: "Fruits",
        title: "LadyFigers",
        location: "hyd",
        details: "1kg",
        price: 20
    },
    {

        imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
        altText: "Fruits",
        title: "LadyFigers",
        location: "hyd",
        details: "1kg",
        price: 40
    },
    {

        imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
        altText: "Fruits",
        title: "LadyFingers",
        location: "hyd",
        details: "1kg",
        price: 35
    },
    {

        imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
        altText: "Vegitables",
        title: "LadyFingers",
        location: "hyd",
        details: "1kg",
        price: 45
    }]);

  const newData = [    {
    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 32
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 44
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 50
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 41
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 10
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 31
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 34
},
{

    imgSrc: "https://healthwire.pk/wp-content/uploads/2022/03/lady-finger-benefits.jpg",
    altText: "Vegitables",
    title: "LadyFingers",
    location: "hyd",
    details: "1kg",
    price: 37
},
  // Add more objects as needed
];
const [selectedtype,setselectedtypedata]=useState("All");







const [isModalOpen, setIsModalOpen] = useState(false);
const [SortOrder, setSortOrder] = useState(null);


const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);

};















   // Assuming your landBoxData is an array of objects
   const handleSort = (order) => {
    
    setSortOrder(order);
    if (order === 'lowToHigh') {
        const tmptmplandBoxData = landBoxData;
      setlandBoxData(tmptmplandBoxData => tmptmplandBoxData.slice().sort((a, b) => {
        return parseInt(a.price - b.price);
      }));
    } else if (order === 'highToLow') {
        const tmptmplandBoxData = landBoxData;
      setlandBoxData(tmptmplandBoxData => tmptmplandBoxData.slice().sort((a, b) => {
        return parseInt(b.price - a.price);
      }));
    }
    closeModal(); // Close modal after sorting
  };




 

  












useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (documentHeight - scrollTop === windowHeight) {
        setIsBottom(true);
        let updateLandBoxData = landBoxData;
        newData.forEach(data =>{
            updateLandBoxData.push(data);
        })
        setlandBoxData(updateLandBoxData);
      } else {
        setIsBottom(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLandClick = (landData) => {
    setselectedlandBoxData(landData);
  };


  const filterItemType = (itemType) => {
    setselectedtypedata(itemType)
    if(itemType === 'All') {
      setDisplayData(landBoxData);
    } else if(itemType === 'Vegitables') {
      const filteredData = landBoxData.filter(obj => obj.altText === "Vegitables");
      setDisplayData(filteredData);
    } else {
      const filteredData = landBoxData.filter(obj => obj.altText === "Fruits");
      setDisplayData(filteredData);
    }
  }

  



  return (

    <div>

        <div className='left-container'>
          <div>
            <button className={(selectedtype=== 'All') ? 'bold': ''} onClick={() => filterItemType('All')}>All</button>
            <button className={(selectedtype=== 'Vegitables') ? 'bold': ''} onClick={() => filterItemType('Vegitables')}>Vegitables</button>
            <button className={(selectedtype=== 'Fruits') ? 'bold': ''}  onClick={() => filterItemType('Fruits')}>Fruits</button>
          </div>
        <Container>
    {displayData.map((data, index) => (
        <LandBox
            key={index}
            imgSrc={data.imgSrc}
            altText={data.altText}
            title={data.title}
            location={data.location}
            details={data.details}
            price={data.price}
            onClick={() => handleLandClick(data)} // Pass the land data to the click handler

        />
    ))}
</Container>

        </div>
        <div className='right-container'>  
        <div>

        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}onSort={handleSort}>
                <button onClick={closeModal}>Close</button>
                <h2>Modal Content</h2>
                <button onClick={() => handleSort('lowToHigh')}>Low to High</button>
                <button onClick={() => handleSort('highToLow')}>highto low</button>
                 
                
            </Modal>




            




















               
            
    </div>   
        </div> 
        <LandBox
          imgSrc={selectedlandBoxData.imgSrc}
          altText={selectedlandBoxData.altText}
          title={selectedlandBoxData.title}
          location={selectedlandBoxData.location}
          details={selectedlandBoxData.details}
          price={selectedlandBoxData.price}
        /></div>
    </div>


  );
};





export default App;






