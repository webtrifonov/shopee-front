import React from 'react';
import s from '../../containers/Home/Home.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortAmountDown, faSortAmountUp, faThLarge, faThList} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {changeFilters, changeViewStatus} from '../../store/actions/productsActions';

const ProductsStatus = ({count, viewStatus, filters}) => {
  const dispatch = useDispatch();
  const changeView = (status) => {
    dispatch(changeViewStatus(status));
  }

  const changeOrder = (order) => {
    dispatch(changeFilters({order}));
  }
  return (
    <div className={`${s.statusBar} bg-black`}>
      <div className={s.statusBarTitle}>{count} products</div>
      <div className={s.view}>

        <div className={s.statusBarTitle}>View</div>
        <FontAwesomeIcon
          onClick={() => changeView('list')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faThList}
          color={viewStatus === 'list' ? '#E3AB37' : '#fafafa'}
        />
        <FontAwesomeIcon
          onClick={() => changeView('grid')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faThLarge}
          color={viewStatus === 'grid' ? '#E3AB37' : '#fafafa'}
        />
      </div>
      <div className={s.sorting}>
        <div className={s.statusBarTitle}>Sorting</div>
        <FontAwesomeIcon
          onClick={() => changeOrder('ASC')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faSortAmountUp}
          color={filters.order === 'ASC' ? '#E3AB37' : '#fafafa'}
        />
        <FontAwesomeIcon
          onClick={() => changeOrder('DESC')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faSortAmountDown}
          color={filters.order === 'DESC' ? '#E3AB37' : '#fafafa'}
        />
      </div>
    </div>
  );
};

export default ProductsStatus;
