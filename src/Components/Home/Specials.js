import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import cheeseBreadImage from '../../images/cheeseBread.jpeg';
import greekSaladImage from '../../images/salad.jpeg';
import pastaMargaritaImage from '../../images/pasta.jpeg';
import { deliverySvg } from '../../assets/svg';
import { AppContext } from '../Context/AppContext';

export default function Specials() {
  const { menuData } = useContext(AppContext);

  return (
    <>
      <div className='specials-heading'>
        <p>This Weeks Specials</p>
        <Link to='/menu' rel='href' aria-label="Go to Online menu page">Online Menu</Link>
      </div>
      <div className='specials-grid'>
        {
          menuData.map(special => {
            let imageSrc;
            if (special.dishUpper === 'CHEESE BREAD') {
              imageSrc = cheeseBreadImage;
            } else if (special.dishUpper === 'GREEK SALAD') {
              imageSrc = greekSaladImage;
            } else if (special.dishUpper === 'PASTA MARGARITA') {
              imageSrc = pastaMargaritaImage;
            }
            return imageSrc ? (
              <div className='card' key={special.id}>
                <img src={imageSrc} alt={special.dishUpper} />
                <div className='card-text'>
                  <h3><span>{special.dishUpper}</span><span>${special.price}</span></h3>
                  <p>{special.description}</p>
                  <Link to='/order' aria-label="Go to Order page">Order a delivery {deliverySvg}</Link>
                </div>
              </div>
            ) : null;
          })
        }
      </div>
    </>
  );
};