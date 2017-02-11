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
  },
};

const Login = ({}) => (
  <section style={styles.wrapper}>
    <div style={Object.assign(styles.inputWrapper, styles.wrapper)}>
      <input style={styles.input} type="text" id="username" name="username" placeholder="username" />
      <input style={styles.input} type="password" id="password" name="password" placeholder="password" />
    </div>
    <div style={Object.assign(styles.buttonsWrapper, styles.wrapper)}>
      <p id="recorver-password" style={styles.recoverPassword}>Recover Password</p>
      <button style={styles.button}>Signup</button>
      <input type="submit" value="Login" style={styles.button} />
    </div>
  </section>
);

Login.propTypes = {

};

Login.defaultProps = {

};

export default Login;
