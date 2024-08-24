import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ data }) => {
  
  return (
    <div className='header-wrapper'>
      <div className='logo-wrapper'>
        <img className='logo-img' src='icons/logo.svg' alt='Logo' />
      </div>
      <div className='menu-wrapper'>
        <ul className="flex-container">
          {/* <input type="text" placeholder="Search AJIO" id="nav-search-div" /> */}
          <li>
            <Link to="/men">MEN</Link>
            <div className="hover-box">
              <ul>
                {data.menData.map((item, index) => (
                  <li key={index}>
                    {item.categories} {item.brands}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/women">WOMEN</Link>
            <div className="hover-box">
              <ul>
                {data.womenData.map((item, index) => (
                  <li key={index}>
                    {item.Categories}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/kids">KIDS</Link>
            <div className="hover-box">
              <ul>
                {data.kidsData.map((item, index) => (
                  <li key={index}>
                    {item.Categories}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/beauty">BEAUTY</Link>
            <div className="hover-box">
              <ul>
                {data.beautyData.map((item, index) => (
                  <li key={index}>
                    {item.Categories}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;









