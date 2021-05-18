import React from 'react';
import Header from './components/header';
import Profile from '../public/images/icon-02.png';
import Icon from '../public/images/icon-01.png';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.div}>
      <Header />
      <p className={styles.p}>Hello Todak</p>
      <img src={Profile} alt="profile" />
      <img src={Icon} alt="profile" />
      <ul>
        <li>1231</li>
        <li>dfsfdsf</li>
      </ul>
      <a href="#">link</a>
    </div>
  );
};

export default App;
