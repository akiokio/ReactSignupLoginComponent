import PropTypes from 'prop-types';
import React from 'react';

const localStyles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    transform: 'rotateY(0deg)',
    width: '100%',
  },
  inputWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 344,
    height: 40,
    margin: '15px 0',
  },
  recoverPasswordWrapper: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recoverPassword: {
    textAlign: 'center',
    cursor: 'pointer',
    margin: '20px 0',
    padding: 15,
  },
  button: {
    margin: '0 15px',
    padding: 15,
  },
};

const Login = ({
  handleShowSignup,
  handleShowRecover,
  styles,
  handleLogin,
  handleChange,
  username,
  password,
  usernameCustomLabel,
  passwordCustomLabel,
  recoverPasswordCustomLabel,
  goToSignupCustomLabel,
  submitLoginCustomLabel,
}) => (
  <section id="login-form" style={Object.assign({}, localStyles.wrapper, styles.wrapper)}>
    <div id="fields" style={Object.assign({}, localStyles.inputWrapper, styles.inputWrapper)}>
      <input
        style={Object.assign({}, localStyles.input, styles.input)}
        type="text"
        id="username"
        name="username"
        placeholder={usernameCustomLabel}
        onChange={e => handleChange(e.target.name, e.target.value)}
        value={username}
      />
      <input
        style={Object.assign({}, localStyles.input, styles.input)}
        type="password"
        id="password"
        name="password"
        placeholder={passwordCustomLabel}
        onChange={e => handleChange(e.target.name, e.target.value)}
        value={password}
      />
    </div>
    <div style={Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper)}>
      <div
        style={Object.assign({}, localStyles.recoverPasswordWrapper, styles.recoverPasswordWrapper)}
      >
        <button
          id="recorver-password"
          type="button"
          style={Object.assign({}, localStyles.recoverPassword, styles.recoverPasswordButton)}
          onClick={() => {
            handleShowRecover('isRecoveringPassword', true);
          }}
        >
          {recoverPasswordCustomLabel}
        </button>
      </div>
      <button
        id="signup-button"
        type="button"
        style={Object.assign({}, localStyles.button, styles.button)}
        onClick={() => {
          handleShowSignup('isLogin', false);
        }}
      >
        {goToSignupCustomLabel}
      </button>
      <input
        id="submit-login"
        name="submit-login"
        value={submitLoginCustomLabel}
        type="submit"
        style={Object.assign({}, localStyles.button, styles.button)}
        onClick={handleLogin}
      />
    </div>
  </section>
);

Login.propTypes = {
  handleShowSignup: PropTypes.func.isRequired,
  handleShowRecover: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    wrapper: PropTypes.object,
    inputWrapper: PropTypes.object,
    buttonsWrapper: PropTypes.object,
    input: PropTypes.object,
    recoverPasswordWrapper: PropTypes.object,
    recoverPasswordButton: PropTypes.object,
    button: PropTypes.object,
  }),
  usernameCustomLabel: PropTypes.string.isRequired,
  passwordCustomLabel: PropTypes.string.isRequired,
  recoverPasswordCustomLabel: PropTypes.string.isRequired,
  goToSignupCustomLabel: PropTypes.string.isRequired,
  submitLoginCustomLabel: PropTypes.string.isRequired,
};

Login.defaultProps = {
  styles: {},
};

export default Login;
