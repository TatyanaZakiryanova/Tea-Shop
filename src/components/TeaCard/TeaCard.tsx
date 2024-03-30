import { useState } from 'react';
import { TeaProps } from '../../App';

export const TeaCard: React.FC<TeaProps> = ({ imageUrl, title, type, weight, price }) => {
  const [activeWeight, setActiveWeight] = useState<number>(0);

  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="card-image" src={imageUrl} />
        <h3 className="card-title">{title}</h3>
        <div className="card-inform">
          <h4 className="tea-price">Price: from {price} &#8381;</h4>
          <h5>per 100 grams</h5>
          <h4 className="tea-type">Type: {type} tea</h4>
          <div className="weight-selector">
            <h4 className="tea-weight">Weight:</h4>
            <ul>
              {weight.map((grams, index) => (
                <li key={grams}>
                  <button
                    onClick={() => setActiveWeight(index)}
                    className={activeWeight === index ? 'active-button' : ''}
                  >
                    {grams} g
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="cart-add">
            Add to cart <span>0</span>
          </button>
        </div>
      </div>
    </div>
  );
};
