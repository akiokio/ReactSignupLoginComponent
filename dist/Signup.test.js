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
    passwordConfirmation: '',
    usernameCustomLabel: 'Username',
    passwordCustomLabel: 'Password',
    passwordConfirmationCustomLabel: 'Confirm password',
    recoverPasswordCustomLabel: 'Recover Password',
    signupCustomLabel: 'Signup',
    submitLoginCustomLabel: 'Signup',
    goToLoginCustomLabel: 'Login',
    submitSignupCustomLabel: 'Signup'
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
    var wrapper = shallow(React.createElement(Signup, Object.assign({}, requiredMockProps, {
      handleShowLogin: jest.fn(),
      handleSignup: signupCallback,
      handleChange: jest.fn(),
      username: '',
      password: '',
      passwordConfirmation: ''
    })));
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });

  describe('with custom labels', function () {
    var customLabelUsername = 'email';
    var customLabelPassword = 'your secure pass';
    var customLabelPasswordConfirmation = 'your secure pass confirmation';
    var customRecoverPass = 'lost your pass?';
    var customGoToLogin = 'Back to login';
    var customSendSubmit = 'Custon send';
    var wrapper = shallow(React.createElement(Signup, Object.assign({}, requiredMockProps, {
      usernameCustomLabel: customLabelUsername,
      passwordCustomLabel: customLabelPassword,
      passwordConfirmationCustomLabel: customLabelPasswordConfirmation,
      recoverPasswordCustomLabel: customRecoverPass,
      goToLoginCustomLabel: customGoToLogin,
      submitSignupCustomLabel: customSendSubmit
    })));
    it('should render custom labels if provided', function () {
      expect(wrapper.find('input[name="username"]').prop('placeholder')).toEqual(customLabelUsername);
      expect(wrapper.find('input[name="password"]').prop('placeholder')).toEqual(customLabelPassword);
      expect(wrapper.find('input[name="passwordConfirmation"]').prop('placeholder')).toEqual(customLabelPasswordConfirmation);

      expect(wrapper.find('#login-button').text()).toEqual(customGoToLogin);

      expect(wrapper.find('input[type="submit"]').prop('value')).toEqual(customSendSubmit);
    });
  });
});