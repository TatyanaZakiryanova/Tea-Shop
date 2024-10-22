import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import CartTea from '../../components/CartTea/CartTea';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import Button from '../../components/UI/Button/Button';
import { clearCart } from '../../redux/cartSlice/cartSlice';
import { cartItemsSelector, totalCostSelector } from '../../redux/cartSlice/selectors';
import { CartItem } from '../../redux/cartSlice/types';
import { useAppDispatch } from '../../redux/store';
import styles from './Cart.module.scss';

const Cart = () => {
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
        <Button className={styles.clearCart} onClick={onClickClearCart}>
          Clear cart
        </Button>
      </div>
      <div className={styles.item}>
        {items.map((item: CartItem) => (
          <CartTea key={uuidv4()} {...item} />
        ))}
      </div>
      <div className={styles.inform}>
        <div className={styles.total}>Total: {totalCost}</div>
        <Button className={styles.order}>Place an order</Button>
      </div>
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <Button className={styles.back}>
            <MdOutlineKeyboardDoubleArrowLeft />
            Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
