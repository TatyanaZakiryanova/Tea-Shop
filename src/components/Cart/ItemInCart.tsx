import { RiDeleteBinLine } from 'react-icons/ri';
import { addItem, minusAmount, removeItem } from '../../redux/cartSlice/cartSlice';
import { CartItem } from '../../redux/cartSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './ItemInCart.module.scss';

const ItemInCart: React.FC<CartItem> = ({
  id,
  imageUrl,
  title,
  price,
  type,
  rating,
  weight,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onClickRemoveItem = () => {
    dispatch(removeItem({ id, weight } as CartItem));
  };

  const onClickPlusAmount = () => {
    dispatch(addItem({ id, weight } as CartItem));
  };

  const onClickMinusAmount = () => {
    dispatch(minusAmount({ id, weight } as CartItem));
  };

  return (
    <>
      <div>
        <div className={styles.display}>
          <div className={styles.main}>
            <img className={styles.img} src={imageUrl} />
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.inform}>
            <h4 className={styles.price}>{price}</h4>
            <h4>Type: {type} tea</h4>
            <h4>Rating: {rating}</h4>
            <h4>Weight: {weight} g</h4>
          </div>
          <h4 className={styles.amount}>
            Number: {count}{' '}
            <button onClick={onClickPlusAmount} className={styles.amountbutton}>
              +
            </button>
            <button
              disabled={count === 1}
              onClick={onClickMinusAmount}
              className={styles.amountbutton}
            >
              -
            </button>
          </h4>
          <button className={styles.remove} onClick={onClickRemoveItem}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemInCart;
