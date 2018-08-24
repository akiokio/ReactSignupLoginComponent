var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React from 'react';

import Login from './Login';
import Signup from './Signup';
import RecoverPassword from './RecoverPassword';

// Our only css dependency
import './normalize.css';

var ReactSignupLoginComponent = function (_React$Component) {
  _inherits(ReactSignupLoginComponent, _React$Component);

  function ReactSignupLoginComponent(props) {
    _classCallCheck(this, ReactSignupLoginComponent);

    var _this = _possibleConstructorReturn(this, (ReactSignupLoginComponent.__proto__ || Object.getPrototypeOf(ReactSignupLoginComponent)).call(this, props));

    _this.updateState = _this.updateState.bind(_this);
    _this.bubleUpSignup = _this.bubleUpSignup.bind(_this);
    _this.bubleUpLogin = _this.bubleUpLogin.bind(_this);
    _this.bubleUpRecoverPassword = _this.bubleUpRecoverPassword.bind(_this);

    _this.state = {
      isLogin: _this.props.isLogin,
      isRecoveringPassword: _this.props.isRecoveringPassword,
      username: '',
      password: '',
      passwordConfirmation: ''
    };
    return _this;
  }

  _createClass(ReactSignupLoginComponent, [{
    key: 'updateState',
    value: function updateState(key, value) {
      this.setState(_defineProperty({}, key, value));
    }
  }, {
    key: 'bubleUpSignup',
    value: function bubleUpSignup() {
      this.props.handleSignup({
        username: this.state.username,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation
      });
    }
  }, {
    key: 'bubleUpLogin',
    value: function bubleUpLogin() {
      this.props.handleLogin({
        username: this.state.username,
        password: this.state.password
      });
    }
  }, {
    key: 'bubleUpRecoverPassword',
    value: function bubleUpRecoverPassword() {
      this.props.handleRecoverPassword({
        username: this.state.username
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = {
        wrapper: {
          border: '1px solid #eee',
          borderRadius: 3,
          backgroundColor: '#FAFAFA',
          margin: 10,
          padding: 20,
          maxWidth: '500px',

          width: 500,
          height: 400,
          perspective: 1000
        },
        title: {
          textAlign: 'center',
          height: 40,
          lineHeight: '40px'
        },
        flipper: {
          transition: '0.4s',
          transformStyle: 'preserve-3d',
          position: 'relative',
          transform: 'rotateY(' + (!this.state.isLogin || this.state.isRecoveringPassword ? '180' : '0') + 'deg)'
        }
      };
      var showCard = function showCard() {
        if (_this2.state.isLogin && !_this2.state.isRecoveringPassword) {
          return React.createElement(Login, {
            key: 'login-form',
            handleShowSignup: _this2.updateState,
            handleShowRecover: _this2.updateState,
            styles: _this2.props.styles.login,
            handleLogin: _this2.bubleUpLogin,
            handleChange: _this2.updateState,
            username: _this2.state.username,
            password: _this2.state.password,
            usernameCustomLabel: _this2.props.usernameCustomLabel,
            passwordCustomLabel: _this2.props.passwordCustomLabel,
            recoverPasswordCustomLabel: _this2.props.recoverPasswordCustomLabel,
            goToSignupCustomLabel: _this2.props.goToSignupCustomLabel,
            submitLoginCustomLabel: _this2.props.submitLoginCustomLabel
          });
        } else if (!_this2.state.isLogin && !_this2.state.isRecoveringPassword) {
          return React.createElement(Signup, {
            key: 'signup-form',
            handleShowLogin: _this2.updateState,
            styles: _this2.props.styles.signup,
            handleSignup: _this2.bubleUpSignup,
            handleChange: _this2.updateState,
            username: _this2.state.username,
            password: _this2.state.password,
            passwordConfirmation: _this2.state.passwordConfirmation,
            usernameCustomLabel: _this2.props.usernameCustomLabel,
            passwordCustomLabel: _this2.props.passwordCustomLabel,
            passwordConfirmationCustomLabel: _this2.props.passwordConfirmationCustomLabel,
            goToLoginCustomLabel: _this2.props.goToLoginCustomLabel,
            submitSignupCustomLabel: _this2.props.submitSignupCustomLabel
          });
        }
        return React.createElement(RecoverPassword, {
          handleShowLogin: _this2.updateState,
          handleRecoverPassword: _this2.bubleUpRecoverPassword,
          handleChange: _this2.updateState,
          styles: _this2.props.styles.recoverPassword,
          username: _this2.state.username,
          usernameCustomLabel: _this2.props.usernameCustomLabel,
          goToLoginCustomLabel: _this2.props.goToLoginCustomLabel,
          submitRecoverPasswordCustomLabel: _this2.props.submitRecoverPasswordCustomLabel
        });
      };
      return React.createElement(
        'section',
        {
          id: 'main-wrapper',
          style: Object.assign(styles.wrapper, this.props.styles.mainWrapper)
        },
        React.createElement(
          'h1',
          { style: Object.assign(styles.title, this.props.styles.mainTitle) },
          this.props.title
        ),
        React.createElement(
          'div',
          { style: Object.assign(styles.flipper, this.props.styles.flipper) },
          showCard()
        )
      );
    }
  }]);

  return ReactSignupLoginComponent;
}(React.Component);

ReactSignupLoginComponent.propTypes = {
  title: PropTypes.string,
  isLogin: PropTypes.bool,
  isRecoveringPassword: PropTypes.bool,
  styles: PropTypes.shape({
    mainWrapper: PropTypes.object,
    mainTitle: PropTypes.object,
    flipper: PropTypes.object,
    signup: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      recoverPassword: PropTypes.object,
      button: PropTypes.object
    }),
    login: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      recoverPasswordWrapper: PropTypes.object,
      recoverPasswordButton: PropTypes.object,
      button: PropTypes.object
    }),
    recoverPassword: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      button: PropTypes.object
    })
  }),
  handleSignup: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleRecoverPassword: PropTypes.func.isRequired,
  usernameCustomLabel: PropTypes.string,
  passwordCustomLabel: PropTypes.string,
  passwordConfirmationCustomLabel: PropTypes.string,
  recoverPasswordCustomLabel: PropTypes.string,
  goToSignupCustomLabel: PropTypes.string,
  submitLoginCustomLabel: PropTypes.string,
  goToLoginCustomLabel: PropTypes.string,
  submitSignupCustomLabel: PropTypes.string,
  submitRecoverPasswordCustomLabel: PropTypes.string
};

ReactSignupLoginComponent.defaultProps = {
  title: 'Company Name',
  isLogin: true,
  isRecoveringPassword: false,
  styles: {},
  usernameCustomLabel: 'Username',
  passwordCustomLabel: 'Password',
  passwordConfirmationCustomLabel: 'Confirm password',
  recoverPasswordCustomLabel: 'Recover Password',
  goToSignupCustomLabel: 'Signup',
  goToLoginCustomLabel: 'Login',
  submitLoginCustomLabel: 'Signup',
  submitSignupCustomLabel: 'Signup',
  submitRecoverPasswordCustomLabel: 'Recover'
};

export default ReactSignupLoginComponent;