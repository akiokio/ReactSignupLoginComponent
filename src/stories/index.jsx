import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Wrapper from '../components/Wrapper';


storiesOf('React signup login component', module)
  .add('to default wrapper', () => (
    <Wrapper />
  ))
  .add('to signup as default', () => (
    <Wrapper isLogin={false} />
  ))
  .add('to signup with custom title', () => (
    <Wrapper isLogin={false} title={'My awesome company'} />
  ))
  .add('to recover password', () => (
    <Wrapper isRecoveringPassword />
  ))
  .add('to default wrapper with no css', () => (
    <Wrapper />
  ))
  .add('to default wrapper with ugly css on all posible elements', () => (
    <Wrapper
      styles={{
        mainWrapper: { backgroundColor: 'blue' },
        mainTitle: { color: 'red' },
        flipper: { transition: '0.1s' },
        signup: {
          wrapper: { backgroundColor: 'yellow' },
          inputWrapper: { backgroundColor: 'AliceBlue' },
          buttonsWrapper: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          recoverPassword: {},
          button: { backgroundColor: 'LightCoral' },
        },
        login: {
          wrapper: { backgroundColor: 'yellow' },
          inputWrapper: { backgroundColor: 'AliceBlue' },
          buttonsWrapper: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          recoverPasswordWrapper: { backgroundColor: 'MediumBlue' },
          recoverPasswordButton: { backgroundColor: 'OldLace ' },
          button: { backgroundColor: 'LightCoral' },
        },
        recoverPassword: {
          wrapper: { backgroundColor: 'yellow' },
          inputWrapper: { backgroundColor: 'AliceBlue' },
          buttonsWrapper: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          button: { backgroundColor: 'LightCoral' },
        },
      }}
    />
  ));
