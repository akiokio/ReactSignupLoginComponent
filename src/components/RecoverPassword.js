import PropTypes from 'prop-types';
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
  button: {
    margin: '0 15px',
    padding: 15,
  },
};

const RecoverPassword = ({
  handleShowLogin,
  styles,
  handleChange,
  handleRecoverPassword,
  username,
  usernameCustomLabel,
  goToLoginCustomLabel,
  submitRecoverPasswordCustomLabel,
}) => (
  <section
    id="recover-password-form"
    style={Object.assign({}, localStyles.wrapper, styles.wrapper)}
  >
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
    </div>
    <div style={Object.assign({}, localStyles.buttonsWrapper, styles.buttonsWrapper)}>
      <button
        id="login-button"
        type="button"
        style={Object.assign({}, localStyles.button, styles.button)}
        onClick={() => {
          handleShowLogin('isRecoveringPassword', false);
        }}
      >
        {goToLoginCustomLabel}
      </button>
      <input
        id="submit-recover-password"
        name="submit-recover-password"
        type="submit"
        value={submitRecoverPasswordCustomLabel}
        style={Object.assign({}, localStyles.button, styles.button)}
        onClick={handleRecoverPassword}
      />
    </div>
  </section>
);

RecoverPassword.propTypes = {
  handleShowLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRecoverPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    wrapper: PropTypes.object,
    inputWrapper: PropTypes.object,
    buttonsWrapper: PropTypes.object,
    input: PropTypes.object,
    button: PropTypes.object,
  }),
  usernameCustomLabel: PropTypes.string.isRequired,
  goToLoginCustomLabel: PropTypes.string.isRequired,
  submitRecoverPasswordCustomLabel: PropTypes.string.isRequired,
};

RecoverPassword.defaultProps = {
  styles: {},
};

export default RecoverPassword;
