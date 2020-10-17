import React from 'react';
import classes from './Loader.module.scss';
import LoaderIcon from '../../../assets/images/loader.svg';

const Loader = () => {
  return (
    <div className={classes.container}>
      <img className={classes.loaderWrapper} src={LoaderIcon} alt="loader" />
    </div>
  );
};

export default Loader;
