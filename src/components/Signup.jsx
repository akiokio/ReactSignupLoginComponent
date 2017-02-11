import React from 'react';

const styles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
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

const Signup = ({ handleShowLogin }) => (
  <section style={styles.wrapper}>
    <div id="fields" style={styles.inputWrapper}>
      <input
        style={styles.input}
        type="text"
        id="username"
        name="username"
        placeholder="Username"
      />
      <input
        style={styles.input}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <input
        style={styles.input}
        type="password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        placeholder="Confirm password"
      />
    </div>
    <div style={styles.buttonsWrapper}>
      <button
        id="login-button"
        style={styles.button}
        onClick={() => { handleShowLogin('isLogin', true); }}
      >Login</button>
      <input type="submit" value="Signup" style={styles.button} />
    </div>
  </section>
);

Signup.propTypes = {
  handleShowLogin: React.PropTypes.func.isRequired,
};

Signup.defaultProps = {
};

export default Signup;
