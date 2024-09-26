import { FaCartShopping } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../Search/Search';
import { useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../redux/cartSlice/selectors';

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
    <>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          <div className={styles.title}>
            <h1>TEA SHOP</h1>
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
      </div>
    </>
  );
};
