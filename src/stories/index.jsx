import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Wrapper from '../components/Wrapper';
import Signup from '../components/Signup';

storiesOf('React signup login component', module)
  .add('to default wrapper', () => (
    <Wrapper />
  ))
  .add('to signup as default', () => (
    <Wrapper isLogin={false} />
  ));
