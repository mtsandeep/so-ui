import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginContainer from 'containers/auth/login/LoginContainer';
import BaseLayout from 'layout/BaseLayout';
import { setUsername, setPassword, login as processLogin } from 'store/Login';

const mapStateToProps = state => ({
  login: state.login
});
const mapDispatchToProps = { setUsername, setPassword, processLogin };

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
  render() {
    const { login, setUsername, setPassword, processLogin } = this.props;
    return (
      <BaseLayout>
        <LoginContainer
          loginStore={login}
          processLogin={processLogin}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
        />
      </BaseLayout>
    );
  }
}

export default Login;
