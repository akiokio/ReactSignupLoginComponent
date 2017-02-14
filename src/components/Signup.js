import React from 'react';

const localStyles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
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
  recoverPassword: {
    width: '100%',
    textAlign: 'center',
  },
  button: {
    margin: '0 15px',
    padding: 15,
  },
};

const Signup = ({
    handleShowLogin,
    styles,
    handleSignup,
    handleChange,
    username,
    password,
    passwordConfirmation,
  }) => (
    <section id="signup-form" style={Object.assign({}, localStyles.wrapper, styles.wrapper)}>
      <div id="fields" style={Object.assign({}, localStyles.inputWrapper, styles.inputWrapper)}>
        <input
          style={Object.assign({}, localStyles.input, styles.input)}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={username}
        />
        <input
          style={Object.assign({}, localStyles.input, styles.input)}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={password}
        />
        <input
          style={Object.assign({}, localStyles.input, styles.input)}
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="Confirm password"
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={passwordConfirmation}
        />
      </div>
      <div style={Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper)}>
        <button
          id="login-button"
          style={Object.assign({}, localStyles.button, styles.button)}
          onClick={() => { handleShowLogin('isLogin', true); }}
        >Login</button>
        <input
          id="submit-signup"
          type="submit"
          value="Signup"
          style={Object.assign({}, localStyles.button, styles.button)}
          onClick={handleSignup}
        />
      </div>
    </section>
);

Signup.propTypes = {
  handleShowLogin: React.PropTypes.func.isRequired,
  handleSignup: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  passwordConfirmation: React.PropTypes.string.isRequired,
  styles: React.PropTypes.shape({
    wrapper: React.PropTypes.object,
    inputWrapper: React.PropTypes.object,
    buttonsWrapper: React.PropTypes.object,
    input: React.PropTypes.object,
    recoverPassword: React.PropTypes.object,
    button: React.PropTypes.object,
  }),
};

Signup.defaultProps = {
  styles: {},
};

export default Signup;
