import React from 'react';

const styles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    transform: 'rotateY(0deg)',
    width: 500,
    height: 300,
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

const Login = ({ handleShowSignup }) => (
  <section id="login-form" style={styles.wrapper}>
    <div id="fields" style={styles.inputWrapper}>
      <input
        style={styles.input}
        type="text"
        id="username"
        name="username"placeholder="Username"
      />
      <input
        style={styles.input}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
    </div>
    <div style={styles.buttonsWrapper}>
      <p id="recorver-password" style={styles.recoverPassword}>Recover Password</p>
      <button
        id="signup-button"
        style={styles.button}
        onClick={() => { handleShowSignup('isLogin', false); }}
      >Signup</button>
      <input type="submit" value="Login" style={styles.button} />
    </div>
  </section>
);

Login.propTypes = {
  handleShowSignup: React.PropTypes.func.isRequired,
};

Login.defaultProps = {

};

export default Login;
