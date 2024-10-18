import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <>
      <div>
        <h2 className={styles.title}>Cart</h2>
      </div>
      <div className={styles.empty}>
        <IoCartOutline className={styles.icon} size={60} />
        <h2>Cart is empty</h2>
        <p>Return to the main page to order items:</p>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
