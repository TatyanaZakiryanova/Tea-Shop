import { useEffect } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { TeaCard } from '../components/TeaCard/TeaCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import Skeleton from '../components/TeaCard/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import ItemsNotFound from '../components/ItemsNotFound/ItemsNotFound';
import { fetchTeas } from '../redux/teaSlice/asyncActions';

const Main = (): JSX.Element => {
  const sortType = useAppSelector((state) => state.filterReducer.sort);

  const { categoryIndex, searchValue, currentPage } = useAppSelector(
    (state) => state.filterReducer,
  );
  const { items, status } = useAppSelector((state) => state.teaReducer);

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const sortBy = sortType.sortParam;
    const order =
      sortType.sortParam === 'title' ||
      ((sortType.sortParam === 'price' || 'rating') && sortType.name.includes('↑'))
        ? 'asc'
        : 'desc';
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
    const search = searchValue;

    dispatch(
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

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const teas = items.map((obj) => (
    <li key={obj.id}>
      <TeaCard {...obj} />
    </li>
  ));

  return (
    <>
      <div className="content-top">
        <Categories />
        <Sort />
      </div>
      <div className="content-items">
        <>
          {status === 'error' ? <ItemsNotFound /> : <>{status === 'loading' ? skeleton : teas}</>}
        </>
      </div>
      <Pagination />
    </>
  );
};

export default Main;
