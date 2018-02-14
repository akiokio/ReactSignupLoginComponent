/* global document, alert */
import './shims.js';

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactSignupLoginComponent from './components/ReactSignupLoginComponent';

import './index.css';

const App = () => {
  const signupWasClickedCallback = (data) => {
    console.log(data);
    alert('Signup callback, see log on the console to see the data.');
  };
  const loginWasClickedCallback = (data) => {
    console.log(data);
    alert('Login callback, see log on the console to see the data.');
  };
  const recoverPasswordWasClickedCallback = (data) => {
    console.log(data);
    alert('Recover password callback, see log on the console to see the data.');
  };
  return (
    <div className="loginWrapper">
      <ReactSignupLoginComponent
        title="My awesome company"
        handleSignup={signupWasClickedCallback}
        handleLogin={loginWasClickedCallback}
        handleRecoverPassword={recoverPasswordWasClickedCallback}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
