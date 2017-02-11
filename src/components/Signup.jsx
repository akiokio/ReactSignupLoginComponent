import React from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
  },
  buttonsWrapper: {
    width: '100%',
  },
  input: {
    width: '60%',
    height: '40px',
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
    <div id="fields" style={Object.assign(styles.inputWrapper, styles.wrapper)}>
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
    <div style={Object.assign(styles.buttonsWrapper, styles.wrapper)}>
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
