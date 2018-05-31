import React from 'react';
import { SITE_NAME } from 'constants';
import styles from './LoginContainer.scss';

const Login = ({
  loginStore,
  onUsernameChange,
  onPasswordChange,
  processLogin
}) => {
  const handleUsernameChange = e => onUsernameChange(e.target.value);
  const handlePasswordChange = e => onPasswordChange(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    processLogin();
  };

  return (
    <div className={styles.container}>
      {!loginStore.token && (
        <h2 className={styles.title}>Login to {SITE_NAME}</h2>
      )}
      {loginStore.error && <p className={styles.error}>{loginStore.error}</p>}
      {!loginStore.token && (
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
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
              <input
                className={styles.submitBtn}
                type="submit"
                value="LOGIN"
                onSubmit={processLogin}
              />
            </div>
          </form>
        </div>
      )}
      {loginStore.token && (
        <div className={styles.wrapper}>
          <h3>Welcome {loginStore.username}</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
