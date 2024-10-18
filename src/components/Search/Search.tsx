import debounce from 'lodash.debounce';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';

import { setSearchValue } from '../../redux/filterSlice/filterSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './Search.module.scss';

export const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useAppDispatch();

  const debouncedOnChangeInput = useCallback(
    debounce((val: string) => {
      dispatch(setSearchValue(val));
    }, 300),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      debouncedOnChangeInput.cancel();
    };
  }, [debouncedOnChangeInput]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
    debouncedOnChangeInput(value);
  };

  return (
    <div className={styles.search}>
      <LiaSearchSolid className={styles.icon} />
      <input value={searchText} onChange={onChangeInput} placeholder="Search..." />
    </div>
  );
};
