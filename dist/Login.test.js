/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('the login form', function () {
  var requiredMockProps = {
    handleShowSignup: jest.fn(),
    handleShowRecover: jest.fn(),
    handleLogin: jest.fn(),
    handleChange: jest.fn(),
    username: '',
    password: '',
    usernameCustomLabel: 'Username',
    passwordCustomLabel: 'Password',
    passwordConfirmationCustomLabel: 'Confirm password',
    recoverPasswordCustomLabel: 'Recover Password',
    goToSignupCustomLabel: 'Signup',
    submitLoginCustomLabel: 'Signup'
  };
  it('renders without crashing', function () {
    shallow(React.createElement(Login, requiredMockProps));
  });

  it('renders the default skeleton', function () {
    var wrapper = shallow(React.createElement(Login, requiredMockProps));
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="username"]').prop('id')).toEqual('username');
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]').prop('id')).toEqual('password');
    expect(wrapper.find('#recorver-password')).toHaveLength(1);
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
    expect(wrapper.find('#signup-button')).toHaveLength(1);
  });

  it('renders with the default props', function () {
    var wrapper = shallow(React.createElement(Login, requiredMockProps));
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
    expect(wrapper.find('#recorver-password')).toHaveLength(1);
  });

  it('should call handle login when submit-login clicked', function () {
    var loginCallback = jest.fn();
    var wrapper = shallow(React.createElement(Login, Object.assign({}, requiredMockProps, {
      handleLogin: loginCallback,
      username: '',
      password: ''
    })));
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls.length).toEqual(1);
  });

  describe('with custom labels', function () {
    var customLabelUsername = 'email';
    var customLabelPassword = 'your secure pass';
    var customRecoverPass = 'lost your pass?';
    var customSignup = 'Join us';
    var customSubmit = 'Send';
    var wrapper = shallow(React.createElement(Login, Object.assign({}, requiredMockProps, {
      usernameCustomLabel: customLabelUsername,
      passwordCustomLabel: customLabelPassword,
      recoverPasswordCustomLabel: customRecoverPass,
      goToSignupCustomLabel: customSignup,
      submitLoginCustomLabel: customSubmit
    })));
    it('should render custom labels if provided', function () {
      expect(wrapper.find("input[name='username']").prop('placeholder')).toEqual(customLabelUsername);
      expect(wrapper.find("input[name='password']").prop('placeholder')).toEqual(customLabelPassword);

      expect(wrapper.find('#recorver-password').text()).toEqual(customRecoverPass);
      expect(wrapper.find('#signup-button').text()).toEqual(customSignup);

      expect(wrapper.find("input[name='submit-login']").prop('value')).toEqual(customSubmit);
    });
  });
});