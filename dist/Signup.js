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
    transform: 'rotateY(180deg)',
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
  recoverPassword: {
    width: '100%',
    textAlign: 'center'
  },
  button: {
    margin: '0 15px',
    padding: 15
  }
};

var Signup = function Signup(_ref) {
  var handleShowLogin = _ref.handleShowLogin,
      styles = _ref.styles,
      handleSignup = _ref.handleSignup,
      handleChange = _ref.handleChange,
      username = _ref.username,
      password = _ref.password,
      passwordConfirmation = _ref.passwordConfirmation;
  return _react2.default.createElement(
    'section',
    { id: 'signup-form', style: Object.assign({}, localStyles.wrapper, styles.wrapper) },
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
      }),
      _react2.default.createElement('input', {
        style: Object.assign({}, localStyles.input, styles.input),
        type: 'password',
        id: 'passwordConfirmation',
        name: 'passwordConfirmation',
        placeholder: 'Confirm password',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: passwordConfirmation
      })
    ),
    _react2.default.createElement(
      'div',
      { style: Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper) },
      _react2.default.createElement(
        'button',
        {
          id: 'login-button',
          style: Object.assign({}, localStyles.button, styles.button),
          onClick: function onClick() {
            handleShowLogin('isLogin', true);
          }
        },
        'Login'
      ),
      _react2.default.createElement('input', {
        id: 'submit-signup',
        type: 'submit',
        value: 'Signup',
        style: Object.assign({}, localStyles.button, styles.button),
        onClick: handleSignup
      })
    )
  );
};

Signup.propTypes = {
  handleShowLogin: _react2.default.PropTypes.func.isRequired,
  handleSignup: _react2.default.PropTypes.func.isRequired,
  handleChange: _react2.default.PropTypes.func.isRequired,
  username: _react2.default.PropTypes.string.isRequired,
  password: _react2.default.PropTypes.string.isRequired,
  passwordConfirmation: _react2.default.PropTypes.string.isRequired,
  styles: _react2.default.PropTypes.shape({
    wrapper: _react2.default.PropTypes.object,
    inputWrapper: _react2.default.PropTypes.object,
    buttonsWrapper: _react2.default.PropTypes.object,
    input: _react2.default.PropTypes.object,
    recoverPassword: _react2.default.PropTypes.object,
    button: _react2.default.PropTypes.object
  })
};

Signup.defaultProps = {
  styles: {}
};

exports.default = Signup;