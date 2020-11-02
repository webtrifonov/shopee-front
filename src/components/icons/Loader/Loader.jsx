import React from 'react';
import s from './Loader.module.scss';
import LoaderIcon from '../../../assets/images/loader.svg';

const Loader = ({global}) => {
  return global ? (
    <div className={s.container}>
      <img className={s.loaderWrapper} src={LoaderIcon} alt="loader" />
    </div>
  ) : (
    <div className={s.microContainer}>
      <img className={s.loaderWrapper} src={LoaderIcon} alt="loader" />
    </div>
  );
};

export default Loader;
