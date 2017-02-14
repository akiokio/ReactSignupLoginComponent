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
  button: {
    margin: '0 15px',
    padding: 15
  }
};

var RecoverPassword = function RecoverPassword(_ref) {
  var handleShowLogin = _ref.handleShowLogin,
      styles = _ref.styles,
      handleChange = _ref.handleChange,
      handleRecoverPassword = _ref.handleRecoverPassword,
      username = _ref.username;
  return _react2.default.createElement(
    'section',
    { id: 'recover-password-form', style: Object.assign({}, localStyles.wrapper, styles.wrapper) },
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
            handleShowLogin('isRecoveringPassword', false);
          }
        },
        'Login'
      ),
      _react2.default.createElement('input', {
        id: 'submit-recover-password',
        name: 'submit-recover-password',
        type: 'submit',
        value: 'Recover',
        style: Object.assign({}, localStyles.button, styles.button),
        onClick: handleRecoverPassword
      })
    )
  );
};

RecoverPassword.propTypes = {
  handleShowLogin: _react2.default.PropTypes.func.isRequired,
  handleChange: _react2.default.PropTypes.func.isRequired,
  handleRecoverPassword: _react2.default.PropTypes.func.isRequired,
  username: _react2.default.PropTypes.string.isRequired,
  styles: _react2.default.PropTypes.shape({
    wrapper: _react2.default.PropTypes.object,
    inputWrapper: _react2.default.PropTypes.object,
    buttonsWrapper: _react2.default.PropTypes.object,
    input: _react2.default.PropTypes.object,
    button: _react2.default.PropTypes.object
  })
};

RecoverPassword.defaultProps = {
  styles: {}
};

exports.default = RecoverPassword;