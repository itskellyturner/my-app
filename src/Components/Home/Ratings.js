import React from 'react';
import { starSvg } from '../../assets/svg';
import ratingsData from './ratingsData';

export default function Ratings() {
  return (
    <div className='ratings-content'>
      <p className='title'>What our customers say!</p>
      <div className="ratings-grid">
        {
          ratingsData.map(rating => {
            return (
              <div className="ratings-card" key={rating.id}>
                <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
                <div className='customer'>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    <img src={require(`../../images/${rating.img}`)} alt={rating.name}/>
                  <p>{rating.name}</p>
                </div>
                <p>{rating.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}