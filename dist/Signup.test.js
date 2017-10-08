/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('the signup form', function () {
  var requiredMockProps = {
    handleShowLogin: jest.fn(),
    handleSignup: jest.fn(),
    handleChange: jest.fn(),
    username: '',
    password: '',
    passwordConfirmation: ''
  };
  it('renders without crashing', function () {
    shallow(React.createElement(Signup, requiredMockProps));
  });

  it('renders the input fields', function () {
    var form = shallow(React.createElement(Signup, requiredMockProps));
    expect(form.find('input[name="username"]')).toHaveLength(1);
    expect(form.find('input[name="password"]')).toHaveLength(1);
    expect(form.find('input[name="passwordConfirmation"]')).toHaveLength(1);
    expect(form.find('input[type="submit"]')).toHaveLength(1);
    expect(form.find('#login-button')).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', function () {
    var signupCallback = jest.fn();
    var wrapper = shallow(React.createElement(Signup, {
      handleShowLogin: jest.fn(),
      handleSignup: signupCallback,
      handleChange: jest.fn(),
      username: '',
      password: '',
      passwordConfirmation: ''
    }));
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });
});