'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localStyles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    transform: 'rotateY(0deg)',
    width: '100%'
  },
  inputWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 344,
    height: 40,
    margin: '15px 0'
  },
  recoverPasswordWrapper: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recoverPassword: {
    textAlign: 'center',
    cursor: 'pointer',
    margin: '20px 0',
    padding: 15
  },
  button: {
    margin: '0 15px',
    padding: 15
  }
};

var Login = function Login(_ref) {
  var handleShowSignup = _ref.handleShowSignup,
      handleShowRecover = _ref.handleShowRecover,
      styles = _ref.styles,
      handleLogin = _ref.handleLogin,
      handleChange = _ref.handleChange,
      username = _ref.username,
      password = _ref.password;
  return _react2.default.createElement(
    'section',
    { id: 'login-form', style: Object.assign({}, localStyles.wrapper, styles.wrapper) },
    _react2.default.createElement(
      'div',
      { id: 'fields', style: Object.assign({}, localStyles.inputWrapper, styles.inputWrapper) },
      _react2.default.createElement('input', {
        style: Object.assign({}, localStyles.input, styles.input),
        type: 'text',
        id: 'username',
        name: 'username',
        placeholder: 'Username',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: username
      }),
      _react2.default.createElement('input', {
        style: Object.assign({}, localStyles.input, styles.input),
        type: 'password',
        id: 'password',
        name: 'password',
        placeholder: 'Password',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: password
      })
    ),
    _react2.default.createElement(
      'div',
      { style: Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper) },
      _react2.default.createElement(
        'div',
        {
          style: Object.assign({}, localStyles.recoverPasswordWrapper, styles.recoverPasswordWrapper)
        },
        _react2.default.createElement(
          'button',
          {
            id: 'recorver-password',
            style: Object.assign({}, localStyles.recoverPassword, styles.recoverPasswordButton),
            onClick: function onClick() {
              handleShowRecover('isRecoveringPassword', true);
            }
          },
          'Recover Password'
        )
      ),
      _react2.default.createElement(
        'button',
        {
          id: 'signup-button',
          style: Object.assign({}, localStyles.button, styles.button),
          onClick: function onClick() {
            handleShowSignup('isLogin', false);
          }
        },
        'Signup'
      ),
      _react2.default.createElement('input', {
        id: 'submit-login',
        name: 'submit-login',
        type: 'submit',
        value: 'Login',
        style: Object.assign({}, localStyles.button, styles.button),
        onClick: handleLogin
      })
    )
  );
};

Login.propTypes = {
  handleShowSignup: _react2.default.PropTypes.func.isRequired,
  handleShowRecover: _react2.default.PropTypes.func.isRequired,
  handleLogin: _react2.default.PropTypes.func.isRequired,
  handleChange: _react2.default.PropTypes.func.isRequired,
  username: _react2.default.PropTypes.string.isRequired,
  password: _react2.default.PropTypes.string.isRequired,
  styles: _react2.default.PropTypes.shape({
    wrapper: _react2.default.PropTypes.object,
    inputWrapper: _react2.default.PropTypes.object,
    buttonsWrapper: _react2.default.PropTypes.object,
    input: _react2.default.PropTypes.object,
    recoverPasswordWrapper: _react2.default.PropTypes.object,
    recoverPasswordButton: _react2.default.PropTypes.object,
    button: _react2.default.PropTypes.object
  })
};

Login.defaultProps = {
  styles: {}
};

exports.default = Login;