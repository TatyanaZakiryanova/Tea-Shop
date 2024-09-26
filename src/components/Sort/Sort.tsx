import { useState } from 'react';
import { setSortParam } from '../../redux/filterSlice/filterSlice';
import { useAppDispatch } from '../../redux/store';
import { SortEnum, SortName } from '../../redux/filterSlice/types';
import styles from './Sort.module.scss';
import { useSelector } from 'react-redux';
import { sortSelector } from '../../redux/filterSlice/selectors';

const sort: SortName[] = [
  {
    name: 'Title',
    sortParam: SortEnum.TITLE,
  },
  { name: 'Price ↓', sortParam: SortEnum.PRICE },
  { name: 'Price ↑', sortParam: SortEnum.PRICE },
  {
    name: 'Rating ↓',
    sortParam: SortEnum.RATING,
  },
  {
    name: 'Rating ↑',
    sortParam: SortEnum.RATING,
  },
];

export const Sort = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sortName = useSelector(sortSelector);

  const [activeSort, setActiveSort] = useState<boolean>(false);

  const onClickSort = (obj: SortName) => {
    dispatch(setSortParam(obj)), setActiveSort(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <h2>
          Sort by: <span onClick={() => setActiveSort(!activeSort)}>{sortName.name}</span>
        </h2>
      </div>
      {activeSort && (
        <div className={styles.popup}>
          <ul>
            {sort.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickSort(obj)}
                className={sortName.sortParam === obj.sortParam ? styles.active : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
