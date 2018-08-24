import PropTypes from 'prop-types';
import React from 'react';

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
      passwordConfirmation = _ref.passwordConfirmation,
      usernameCustomLabel = _ref.usernameCustomLabel,
      passwordCustomLabel = _ref.passwordCustomLabel,
      passwordConfirmationCustomLabel = _ref.passwordConfirmationCustomLabel,
      goToLoginCustomLabel = _ref.goToLoginCustomLabel,
      submitSignupCustomLabel = _ref.submitSignupCustomLabel;
  return React.createElement(
    'section',
    { id: 'signup-form', style: Object.assign({}, localStyles.wrapper, styles.wrapper) },
    React.createElement(
      'div',
      { id: 'fields', style: Object.assign({}, localStyles.inputWrapper, styles.inputWrapper) },
      React.createElement('input', {
        style: Object.assign({}, localStyles.input, styles.input),
        type: 'text',
        id: 'username',
        name: 'username',
        placeholder: usernameCustomLabel,
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: username
      }),
      React.createElement('input', {
        style: Object.assign({}, localStyles.input, styles.input),
        type: 'password',
        id: 'password',
        name: 'password',
        placeholder: passwordCustomLabel,
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: password
      }),
      React.createElement('input', {
        style: Object.assign({}, localStyles.input, styles.input),
        type: 'password',
        id: 'passwordConfirmation',
        name: 'passwordConfirmation',
        placeholder: passwordConfirmationCustomLabel,
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: passwordConfirmation
      })
    ),
    React.createElement(
      'div',
      { style: Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper) },
      React.createElement(
        'button',
        {
          id: 'login-button',
          type: 'button',
          style: Object.assign({}, localStyles.button, styles.button),
          onClick: function onClick() {
            handleShowLogin('isLogin', true);
          }
        },
        goToLoginCustomLabel
      ),
      React.createElement('input', {
        id: 'submit-signup',
        type: 'submit',
        value: submitSignupCustomLabel,
        style: Object.assign({}, localStyles.button, styles.button),
        onClick: handleSignup
      })
    )
  );
};

Signup.propTypes = {
  handleShowLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    wrapper: PropTypes.object,
    inputWrapper: PropTypes.object,
    buttonsWrapper: PropTypes.object,
    input: PropTypes.object,
    recoverPassword: PropTypes.object,
    button: PropTypes.object
  }),
  usernameCustomLabel: PropTypes.string.isRequired,
  passwordCustomLabel: PropTypes.string.isRequired,
  passwordConfirmationCustomLabel: PropTypes.string.isRequired,
  goToLoginCustomLabel: PropTypes.string.isRequired,
  submitSignupCustomLabel: PropTypes.string.isRequired
};

Signup.defaultProps = {
  styles: {}
};

export default Signup;