// Let's make the examples visually pleasing
import 'bulma/css/bulma.css';

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
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
  ));
