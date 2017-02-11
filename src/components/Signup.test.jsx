/* global it, expect, describe */

import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('the signup form', () => {
  it('renders without crashing', () => {
    shallow(<Signup />);
  });
});
