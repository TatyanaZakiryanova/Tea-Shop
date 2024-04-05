import { FaCartShopping } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../Search/Search';
import { useAppSelector } from '../../redux/store';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const { items } = useAppSelector((state) => state.cartReducer);
  const totalCount = items.reduce((val, item) => val + item.count, 0);

  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="header-link">
          <div className="header-title">
            <h1>Tea Shop</h1>
            <p>loose leaf tea with exquisite taste</p>
          </div>
        </Link>
        {location.pathname !== '/cart' && <Search />}
        {location.pathname !== '/cart' && (
          <button className="cart-button">
            <Link to="cart" className="cart-link">
              <FaCartShopping className="cart-icon" /> {totalCount}
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};
