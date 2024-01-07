import { starSvg } from '../../assets/svg';
import ratingsData from './ratingsData.js';

export default function Ratings() {
  return (
    <div className='ratings-content'>
      <p className='title'>What Our Customers Say:</p>
      <div className="ratings-grid">
        {ratingsData.map(rating => (
          <div className="ratings-card" key={rating.id}>
            <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
            <div className='customer'>
              <img src={rating.img} alt={rating.name} />
              <p>{rating.name}</p>
            </div>
            <p>{rating.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
