import React from 'react';
import s from './About.module.scss';
import Title from '../../components/Title/Title';

const About = (props) => {
  return (
    <div className={s.about}>
      <Title>All products</Title>
      <p className={s.description}>Version 1.0.0</p>
      <p className={s.description}>React + Node.js</p>
    </div>
  );
};

export default About;
