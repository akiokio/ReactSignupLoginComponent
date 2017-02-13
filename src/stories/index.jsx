/* global alert */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ReactSignupLoginComponent from '../components/ReactSignupLoginComponent';

storiesOf('React signup login component', module)
  .add('to default wrapper', () => (
    <ReactSignupLoginComponent
      handleSignup={(data) => { console.log(data); alert('Signup callback, see log on the console to see the data.'); }}
      handleLogin={(data) => { console.log(data); alert('Login callback, see log on the console to see the data.'); }}
      handleRecoverPassword={(data) => { console.log(data); alert('Recover password callback, see log on the console to see the data.'); }}
    />
  ))
  .add('to signup as default', () => (
    <ReactSignupLoginComponent
      isLogin={false}
      handleSignup={(data) => { console.log(data); alert('Signup callback, see log on the console to see the data.'); }}
      handleLogin={() => {}}
      handleRecoverPassword={() => {}}
    />
  ))
  .add('to signup with custom title', () => (
    <ReactSignupLoginComponent
      isLogin={false}
      title="My awesome company"
      handleSignup={(data) => { console.log(data); alert('Signup callback, see log on the console to see the data.'); }}
    />
  ))
  .add('to recover password', () => (
    <ReactSignupLoginComponent isRecoveringPassword />
  ))
  .add('to default wrapper with no css', () => (
    <ReactSignupLoginComponent />
  ))
  .add('to default wrapper with ugly css on all posible elements', () => (
    <ReactSignupLoginComponent
      styles={{
        mainReactSignupLoginComponent: { backgroundColor: 'blue' },
        mainTitle: { color: 'red' },
        flipper: { transition: '0.1s' },
        signup: {
          wrapper: { backgroundColor: 'yellow' },
          inputReactSignupLoginComponent: { backgroundColor: 'AliceBlue' },
          buttonsReactSignupLoginComponent: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          recoverPassword: {},
          button: { backgroundColor: 'LightCoral' },
        },
        login: {
          wrapper: { backgroundColor: 'yellow' },
          inputReactSignupLoginComponent: { backgroundColor: 'AliceBlue' },
          buttonsReactSignupLoginComponent: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          recoverPasswordReactSignupLoginComponent: { backgroundColor: 'MediumBlue' },
          recoverPasswordButton: { backgroundColor: 'OldLace ' },
          button: { backgroundColor: 'LightCoral' },
        },
        recoverPassword: {
          wrapper: { backgroundColor: 'yellow' },
          inputReactSignupLoginComponent: { backgroundColor: 'AliceBlue' },
          buttonsReactSignupLoginComponent: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          button: { backgroundColor: 'LightCoral' },
        },
      }}
    />
  ));
