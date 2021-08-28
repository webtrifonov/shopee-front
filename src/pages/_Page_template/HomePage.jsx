import React from 'react';
import s from './home.module.scss';
import Title from './components/Title/Title';

export const HomePage = () => {
  return (
    <div className={s.mainContainer}>
      <Title>All products</Title>
    </div>
  );
};
