import React from 'react';
import { SITE_NAME } from 'constants';
import styles from './LoginContainer.scss';

const Login = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Login to {SITE_NAME}</h2>
    <div className={styles.wrapper}>
      <form>
        <div className={styles.field}>
          <label>Username/Email</label>
          <input type="text" />
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type="password" />
        </div>
        <div className={styles.field}>
          <input className={styles.submitBtn} type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  </div>
);

export default Login;
