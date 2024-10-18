import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Spinner } from '../../components/Spinner/Spinner';
import useAddToCart from '../../hooks/useAddToCart';
import useFetchTea from '../../hooks/useFetchTea';
import { cartItemsSelector } from '../../redux/cartSlice/selectors';
import { selectAddedCartItem } from '../../utils/SelectAddedCartItem';
import styles from './TeaPage.module.scss';

const TeaPage = () => {
  const [activeWeight, setActiveWeight] = useState<number>(0);
  const { id } = useParams();
  const { tea } = useFetchTea(id);
  const { onClickAddItem } = useAddToCart(tea, activeWeight);
  const cartItems = useSelector(cartItemsSelector);

  const addedCartItem = selectAddedCartItem(cartItems, tea?.id, tea?.weight[activeWeight]);

  const addedValue = addedCartItem ? `In cart: ${addedCartItem.count}` : `Add to cart`;

  return (
    <div className={styles.wrapper}>
      {tea ? (
        <>
          <img src={tea.imageUrl} className={styles.img} />
          <div className={styles.inform}>
            <h2 className={styles.title}>{tea.title}</h2>
            <h4 className={styles.price}>
              {tea.price}
              <span> per 100 grams</span>
            </h4>
            <p>The price of tea will be calculated depending on the selected weight.</p>
            <h4 className={styles.type}>Type: {tea.type} tea</h4>
            <p className={styles.description}>{tea.description}</p>
            <ul className={styles.weight}>
              Weight:
              {tea.weight.map((grams, index) => (
                <li key={grams}>
                  <button
                    onClick={() => setActiveWeight(index)}
                    className={activeWeight === index ? styles.activebutton : ''}
                  >
                    {grams} g
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={onClickAddItem}
              className={addedCartItem ? styles.added : styles.notadded}
            >
              <FaCartShopping /> {addedValue}
            </button>
            <div>
              <Link to="/" className={styles.back}>
                <button className={styles.backbutton}>
                  <MdOutlineKeyboardDoubleArrowLeft />
                  Back
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TeaPage;
