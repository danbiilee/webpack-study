import React from 'react';
import Header from './components/header';
import styles from './app.module.css';
import Profile from '../public/images/profile.jpg';
import Icon from '../public/images/icon-01.png';

const App = () => {
  return (
    <div className={styles.div}>
      <Header />
      <p className={styles.p}>Hello Todak</p>
      <img src={Profile} alt="profile" />
      <img src={Icon} alt="profile" />
    </div>
  );
};

export default App;
