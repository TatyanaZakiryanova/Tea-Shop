import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice/cartSlice';
import { useAppDispatch } from '../../redux/store';
import ItemInCart from '../../components/Cart/ItemInCart';
import { v4 as uuidv4 } from 'uuid';
import EmptyCart from '../../components/Cart/EmptyCart';
import { CartItem } from '../../redux/cartSlice/types';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { cartItemsSelector, totalCostSelector } from '../../redux/cartSlice/selectors';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

const Cart = (): JSX.Element => {
  const items = useSelector(cartItemsSelector);
  const totalCost = useSelector(totalCostSelector);

  const dispatch = useAppDispatch();

  const onClickClearCart = () => {
    dispatch(clearCart());
  };

  if (!totalCost) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Cart</h2>
        <button className={styles.clear} onClick={onClickClearCart}>
          Clear cart
        </button>
      </div>
      <div className={styles.item}>
        {items.map((item: CartItem) => (
          <ItemInCart key={uuidv4()} {...item} />
        ))}
      </div>
      <div className={styles.inform}>
        <div className={styles.total}>Total: {totalCost}</div>
        <button className={styles.order}>Place an order</button>
      </div>
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <button className={styles.back}>
            <MdOutlineKeyboardDoubleArrowLeft />
            Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
