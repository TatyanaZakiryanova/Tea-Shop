import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useAddToCart from '../../hooks/useAddToCart';
import { SingleTea } from '../../pages/TeaPage/types';
import { cartItemsSelector } from '../../redux/cartSlice/selectors';
import { selectAddedCartItem } from '../../utils/SelectAddedCartItem';
import styles from './TeaCard.module.scss';

export const TeaCard: React.FC<SingleTea> = ({
  id,
  imageUrl,
  title,
  type,
  weight,
  price,
  rating,
  description,
}) => {
  const [activeWeight, setActiveWeight] = useState<number>(0);
  const cartItems = useSelector(cartItemsSelector);

  const tea = { id, imageUrl, title, type, weight, price, rating, description };
  const { onClickAddItem } = useAddToCart(tea, activeWeight);

  const addedCartItem = selectAddedCartItem(cartItems, id, weight[activeWeight]);
  const addedValue = addedCartItem ? `In cart: ${addedCartItem.count}` : `Add to cart`;

  return (
    <div className={styles.card}>
      <Link key={id} to={`/tea/${id}`}>
        <img className={styles.image} src={imageUrl} title="Show description" />
      </Link>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.inform}>
        <h4 className={styles.price}>{price}</h4>
        <h4>Type: {type} tea</h4>
        <h4>Rating: {rating}</h4>
        <div className={styles.weight}>
          <h4>Weight:</h4>
          <ul>
            {weight.map((grams, index) => (
              <li key={grams}>
                <button
                  onClick={() => setActiveWeight(index)}
                  className={activeWeight === index ? styles.activebutton : styles.weightbutton}
                >
                  {grams} g
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={onClickAddItem} className={addedCartItem ? styles.added : styles.notadded}>
          {addedValue}
        </button>
      </div>
    </div>
  );
};
