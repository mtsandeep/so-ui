import React from 'react';
import { SITE_NAME } from 'constants';
import styles from './LoginContainer.scss';

const Login = ({ loginStore, onUsernameChange, onPasswordChange }) => {
  const handleUsernameChange = e => onUsernameChange(e.target.value);
  const handlePasswordChange = e => onPasswordChange(e.target.value);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login to {SITE_NAME}</h2>
      <div className={styles.wrapper}>
        <form>
          <div className={styles.field}>
            <label>Username/Email</label>
            <input
              type="text"
              onChange={handleUsernameChange}
              value={loginStore.username}
            />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <input type="password" onChange={handlePasswordChange} />
          </div>
          <div className={styles.field}>
            <input className={styles.submitBtn} type="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
