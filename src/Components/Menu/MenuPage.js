import React, { useEffect } from 'react';
import '../../assets/shared.css';
import './Menu.css';
import Footer from '../Footer/Footer';
import MenuData from '../Menu/menuData'; // Import MenuData

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='menu'>
        <h2>Little Lemon Menu</h2>
        <div className='menu-content'>
          {
            MenuData.map(item => ( // Use MenuData here
              <div className='menu-content-item' key={item.id}>
                <img src={item.img} alt={item.name}/> {/* Update the src to use item.img */}
                <div>
                  <p className='menu-item-name'>{item.name}</p> {/* Use item.name */}
                  <p className='menu-item-description'>{item.description}</p> {/* Use item.description */}
                </div>
                <span className='menu-item-price'>${item.price}</span> {/* Use item.price */}
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
};