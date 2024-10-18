import { useEffect, useRef } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { cartItemsSelector } from '../../redux/cartSlice/selectors';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const items = useSelector(cartItemsSelector);
  const totalCount = items.length;
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <div className={styles.title}>
          <h1>Tea Shop</h1>
        </div>
      </Link>
      {location.pathname !== '/cart' && <Search />}
      {location.pathname !== '/cart' && (
        <button className={styles.cartbutton}>
          <Link to="cart" className={styles.cartlink}>
            <FaCartShopping className={styles.carticon} /> {totalCount}
          </Link>
        </button>
      )}
    </header>
  );
};
