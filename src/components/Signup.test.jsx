/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('the signup form', () => {
  it('renders without crashing', () => {
    shallow(<Signup handleShowLogin={jest.fn()} handleSignup={jest.fn()} />);
  });

  it('renders the input fields', () => {
    const form = shallow(<Signup handleShowLogin={jest.fn()} handleSignup={jest.fn()} />);
    expect(form.find('input[name="username"]')).toHaveLength(1);
    expect(form.find('input[name="password"]')).toHaveLength(1);
    expect(form.find('input[name="passwordConfirmation"]')).toHaveLength(1);
    expect(form.find('input[type="submit"]')).toHaveLength(1);
    expect(form.find('#login-button')).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', () => {
    const signupCallback = jest.fn();
    const wrapper = shallow(<Signup
      handleShowLogin={jest.fn()}
      handleSignup={signupCallback}
    />);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });
});
