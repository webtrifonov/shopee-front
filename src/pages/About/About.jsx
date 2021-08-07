import React from 'react';
import s from './about.module.scss';
import Title from '../../components/Title/Title';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const AboutPage = () => {
  return (
    <div className={s.about}>
      <div className={s.breadcrumbs}>
        <Breadcrumbs
          data={[
            {
              to: '/',
              name: 'Main',
            },
            {
              to: '/about',
              name: 'About',
            },
          ]}
        />
      </div>

      <Title>All products</Title>
      <p className={s.description}>Version 1.0.0</p>
      <p className={s.description}>React + Node.js</p>
    </div>
  );
};
