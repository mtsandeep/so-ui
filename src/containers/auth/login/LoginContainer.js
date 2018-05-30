import React from 'react';
import { SITE_NAME } from 'constants';
import styles from './LoginContainer.scss';

const Login = () => (
  <div className={styles.wrapper}>
    <h2>Login to {SITE_NAME}</h2>
    <form>
      <div className={styles.field}>
        <label>Username/Email</label>
        <input type="text" />
      </div>
      <div className={styles.field}>
        <label>Password</label>
        <input type="password" />
      </div>
    </form>
  </div>
);

export default Login;
