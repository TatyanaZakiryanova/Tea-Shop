import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Categories } from '../../components/Categories/Categories';
import ItemsNotFound from '../../components/ItemsNotFound/ItemsNotFound';
import Pagination from '../../components/Pagination/Pagination';
import { Sort } from '../../components/Sort/Sort';
import Skeleton from '../../components/TeaCard/Skeleton';
import { TeaCard } from '../../components/TeaCard/TeaCard';
import {
  categorySelector,
  currentPageSelector,
  searchValueSelector,
  sortSelector,
} from '../../redux/filterSlice/selectors';
import { SortEnum } from '../../redux/filterSlice/types';
import { useAppDispatch } from '../../redux/store';
import { fetchTeas } from '../../redux/teaSlice/asyncActions';
import { itemsSelector, statusSelector } from '../../redux/teaSlice/selectors';
import { Status } from '../../redux/teaSlice/types';
import styles from './Main.module.scss';

const Main = (): JSX.Element => {
  const sortType = useSelector(sortSelector);
  const categoryIndex = useSelector(categorySelector);
  const searchValue = useSelector(searchValueSelector);
  const currentPage = useSelector(currentPageSelector);
  const items = useSelector(itemsSelector);
  const status = useSelector(statusSelector);

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const sortBy = sortType.sortParam;
    const order =
      sortType.sortParam === SortEnum.TITLE ||
      ((sortType.sortParam === SortEnum.PRICE || SortEnum.RATING) && sortType.name.includes('↑'))
        ? 'asc'
        : 'desc';
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
    const search = searchValue;

    await dispatch(
      fetchTeas({
        order,
        category,
        search,
        sortBy,
        currentPage: String(currentPage),
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, [categoryIndex, sortType, searchValue, currentPage]);

  const skeleton = Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />);
  const teas =
    items.length > 0 ? (
      items.map((obj) => (
        <li key={obj.id}>
          <TeaCard {...obj} />
        </li>
      ))
    ) : (
      <ItemsNotFound />
    );

  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.items}>
        <>
          {status === Status.ERROR ? (
            <ItemsNotFound />
          ) : (
            <>{status === Status.LOADING ? skeleton : teas}</>
          )}
        </>
      </div>
      <Pagination />
    </>
  );
};

export default Main;
