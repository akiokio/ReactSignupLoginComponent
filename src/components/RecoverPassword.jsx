import React from 'react';

const styles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
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
  button: {
    margin: '0 15px',
    padding: 15,
  },
};

const RecoverPassword = ({ handleShowLogin }) => (
  <section id="recovering-password" style={styles.wrapper}>
    <div id="fields" style={styles.inputWrapper}>
      <input
        style={styles.input}
        type="text"
        id="username"
        name="username"placeholder="Username"
      />
    </div>
    <div style={styles.buttonsWrapper}>
      <button
        id="login-button"
        style={styles.button}
        onClick={() => { handleShowLogin('isRecoveringPassword', false); }}
      >Login</button>
      <input type="submit" value="Recover" style={styles.button} />
    </div>
  </section>
);

RecoverPassword.propTypes = {
  handleShowLogin: React.PropTypes.func.isRequired,
};

export default RecoverPassword;
