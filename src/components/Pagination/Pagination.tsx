import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import { setCurrentPage } from '../../redux/filterSlice/filterSlice';
import { currentPageSelector } from '../../redux/filterSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useAppDispatch();

  const onClickPage = (page: number) => {
    dispatch(setCurrentPage(page));
    window.scrollTo(0, 0);
  };

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel={<IoMdArrowDropright />}
      onPageChange={(event) => onClickPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel={<IoMdArrowDropleft />}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
      previousClassName={currentPage === 1 ? 'disabled' : ''}
      nextClassName={currentPage === 2 ? 'disabled' : ''}
    />
  );
};

export default Pagination;
