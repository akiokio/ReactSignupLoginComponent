import React from 'react';

import Login from './Login';
import Signup from './Signup';
import RecoverPassword from './RecoverPassword';

// Our only css dependency
import './normalize.css';

class ReactSignupLoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.bubleUpSignup = this.bubleUpSignup.bind(this);
    this.bubleUpLogin = this.bubleUpLogin.bind(this);
    this.bubleUpRecoverPassword = this.bubleUpRecoverPassword.bind(this);

    this.state = {
      isLogin: this.props.isLogin,
      isRecoveringPassword: this.props.isRecoveringPassword,
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  updateState(key, value) {
    this.setState({ [key]: value });
  }

  bubleUpSignup() {
    this.props.handleSignup({
      username: this.state.username,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    });
  }

  bubleUpLogin() {
    this.props.handleLogin({
      username: this.state.username,
      password: this.state.password,
    });
  }

  bubleUpRecoverPassword() {
    this.props.handleRecoverPassword({
      username: this.state.username,
    });
  }

  render() {
    const styles = {
      wrapper: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#FAFAFA',
        margin: 10,
        padding: 20,
        maxWidth: '500px',

        width: 500,
        height: 400,
        perspective: 1000,
      },
      title: {
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
      },
      flipper: {
        transition: '0.4s',
        transformStyle: 'preserve-3d',
        position: 'relative',
        transform: `rotateY(${!this.state.isLogin || this.state.isRecoveringPassword ? '180' : '0'}deg)`,
      },
    };
    const showCard = () => {
      if (this.state.isLogin && !this.state.isRecoveringPassword) {
        return (<Login
          key="login-form"
          handleShowSignup={this.updateState}
          handleShowRecover={this.updateState}
          styles={this.props.styles.login}
          handleLogin={this.bubleUpLogin}
          handleChange={this.updateState}
          username={this.state.username}
          password={this.state.password}
        />);
      } else if (!this.state.isLogin && !this.state.isRecoveringPassword) {
        return (<Signup
          key="signup-form"
          handleShowLogin={this.updateState}
          styles={this.props.styles.signup}
          handleSignup={this.bubleUpSignup}
          handleChange={this.updateState}
          username={this.state.username}
          password={this.state.password}
          passwordConfirmation={this.state.passwordConfirmation}
        />);
      }
      return (<RecoverPassword
        handleShowLogin={this.updateState}
        handleRecoverPassword={this.bubleUpRecoverPassword}
        handleChange={this.updateState}
        styles={this.props.styles.recoverPassword}
        username={this.state.username}
      />);
    };
    return (
      <section id="main-wrapper" style={Object.assign(styles.wrapper, this.props.styles.mainWrapper)}>
        <h1 style={Object.assign(styles.title, this.props.styles.mainTitle)}>{this.props.title}</h1>
        <div style={Object.assign(styles.flipper, this.props.styles.flipper)}>
          {showCard()}
        </div>
      </section>
    );
  }
}

ReactSignupLoginComponent.propTypes = {
  title: React.PropTypes.string,
  isLogin: React.PropTypes.bool,
  isRecoveringPassword: React.PropTypes.bool,
  styles: React.PropTypes.shape({
    mainWrapper: React.PropTypes.object,
    mainTitle: React.PropTypes.object,
    flipper: React.PropTypes.object,
    signup: React.PropTypes.shape({
      wrapper: React.PropTypes.object,
      inputWrapper: React.PropTypes.object,
      buttonsWrapper: React.PropTypes.object,
      input: React.PropTypes.object,
      recoverPassword: React.PropTypes.object,
      button: React.PropTypes.object,
    }),
    login: React.PropTypes.shape({
      wrapper: React.PropTypes.object,
      inputWrapper: React.PropTypes.object,
      buttonsWrapper: React.PropTypes.object,
      input: React.PropTypes.object,
      recoverPasswordWrapper: React.PropTypes.object,
      recoverPasswordButton: React.PropTypes.object,
      button: React.PropTypes.object,
    }),
    recoverPassword: React.PropTypes.shape({
      wrapper: React.PropTypes.object,
      inputWrapper: React.PropTypes.object,
      buttonsWrapper: React.PropTypes.object,
      input: React.PropTypes.object,
      button: React.PropTypes.object,
    }),
  }),
  handleSignup: React.PropTypes.func.isRequired,
  handleLogin: React.PropTypes.func.isRequired,
  handleRecoverPassword: React.PropTypes.func.isRequired,
};

ReactSignupLoginComponent.defaultProps = {
  title: 'Company Name',
  isLogin: true,
  isRecoveringPassword: false,
  styles: {},
};


export default ReactSignupLoginComponent;
