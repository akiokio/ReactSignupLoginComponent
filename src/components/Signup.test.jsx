/* global it, expect, describe */

import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('the signup form', () => {
  it('renders without crashing', () => {
    shallow(<Signup handleShowLogin={() => {}} />);
  });

  it('renders the input fields', () => {
    const form = shallow(<Signup handleShowLogin={() => {}} />);
    expect(form.find('input[name="username"]')).toHaveLength(1);
    expect(form.find('input[name="password"]')).toHaveLength(1);
    expect(form.find('input[name="passwordConfirmation"]')).toHaveLength(1);
    expect(form.find('input[type="submit"]')).toHaveLength(1);
    expect(form.find('#login-button')).toHaveLength(1);
  });
});
