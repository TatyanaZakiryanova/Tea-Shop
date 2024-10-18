import { RiDeleteBinLine } from 'react-icons/ri';

import { addItem, minusAmount, removeItem } from '../../redux/cartSlice/cartSlice';
import { CartItem } from '../../redux/cartSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './CartTea.module.scss';

interface CartItemProps {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number;
  price: number;
  count: number;
}

const CartTea: React.FC<CartItemProps> = ({
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
        Number: {count}
        <button onClick={onClickPlusAmount} className={styles.amountbutton}>
          +
        </button>
        <button disabled={count === 1} onClick={onClickMinusAmount} className={styles.amountbutton}>
          -
        </button>
      </h4>
      <button className={styles.remove} onClick={onClickRemoveItem}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
};

export default CartTea;
