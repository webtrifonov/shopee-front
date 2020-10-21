import React from 'react';
import s from './Loader.module.scss';
import LoaderIcon from '../../../assets/images/loader.svg';

const Loader = ({global}) => {
  return global ? (
    <div className={s.container}>
      <img className={s.loaderWrapper} src={LoaderIcon} alt="loader" />
    </div>
  ) : (
    <img className={s.loaderWrapper} src={LoaderIcon} alt="loader" />
  );
};

export default Loader;
