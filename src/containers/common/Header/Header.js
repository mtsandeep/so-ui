import React from 'react';
import { SITE_NAME } from 'constants';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.stripes}>
      <div className={styles.sectionM} />
      <div className={styles.sectionT} />
      <div className={styles.sectionS} />
      <div className={styles.sectionA} />
      <div className={styles.sectionN} />
      <div className={styles.sectionD} />
      <div className={styles.sectionE} />
      <div className={styles.sectionE} />
      <div className={styles.sectionP} />
    </div>
    <div className="wrapper">
      <div className={styles.main}>
        <h1 className={styles.logo}>
          <a href="#logo">{SITE_NAME}?</a>
        </h1>
      </div>
    </div>
  </div>
);

export default Header;
