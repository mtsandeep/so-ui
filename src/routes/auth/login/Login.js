import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginContainer from 'containers/auth/login/LoginContainer';
import BaseLayout from 'layout/BaseLayout';
import { setUsername, setPassword } from 'store/Login';

const mapStateToProps = state => {
  return { login: state.login };
};

const mapDispatchToProps = { setUsername, setPassword };

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
  render() {
    const { login, setUsername, setPassword } = this.props;
    return (
      <BaseLayout>
        <LoginContainer
          loginStore={login}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
        />
      </BaseLayout>
    );
  }
}

export default Login;
