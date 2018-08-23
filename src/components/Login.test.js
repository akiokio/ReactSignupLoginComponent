/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('the login form', () => {
  const requiredMockProps = {
    handleShowSignup: jest.fn(),
    handleShowRecover: jest.fn(),
    handleLogin: jest.fn(),
    handleChange: jest.fn(),
    username: '',
    password: '',
  };
  it('renders without crashing', () => {
    shallow(<Login {...requiredMockProps} />);
  });

  it('renders the default skeleton', () => {
    const wrapper = shallow(<Login {...requiredMockProps} />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="username"]').prop('id')).toEqual('username');
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]').prop('id')).toEqual('password');
    expect(wrapper.find('#recorver-password')).toHaveLength(1);
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
    expect(wrapper.find('#signup-button')).toHaveLength(1);
  });

  it('renders with the default props', () => {
    const wrapper = shallow(<Login {...requiredMockProps} />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
    expect(wrapper.find('#recorver-password')).toHaveLength(1);
  });

  it('should call handle login when submit-login clicked', () => {
    const loginCallback = jest.fn();
    const wrapper = shallow(
      <Login
        handleShowSignup={jest.fn()}
        handleLogin={loginCallback}
        handleShowRecover={jest.fn()}
        handleChange={jest.fn()}
        username=""
        password=""
      />,
    );
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls.length).toEqual(1);
  });

  describe('custom labels', () => {
    const customLabelUsername = 'email';
    const customLabelPassword = 'your secure pass';
    const customRecoverPass = 'lost your pass?';
    const customSignup = 'Join us';
    const customSubmit = 'Send';
    const wrapper = shallow(
      <Login
        handleShowSignup={jest.fn()}
        handleLogin={jest.fn()}
        handleShowRecover={jest.fn()}
        handleChange={jest.fn()}
        username=""
        password=""
        usernameCustomLabel={customLabelUsername}
        passwordCustomLabel={customLabelPassword}
        recoverPasswordCustomLabel={customRecoverPass}
        signupCustomLabel={customSignup}
        submitLoginCustomLabel={customSubmit}
      />,
    );
    it('should render custom labels if provided', () => {
      expect(wrapper.find(`input[name="${customLabelUsername}"]`).prop('placeholder')).toEqual(customLabelUsername);
      expect(wrapper.find(`input[name="${customLabelUsername}"]`).prop('id')).toEqual(customLabelUsername);
      expect(wrapper.find(`input[name="${customLabelUsername}"]`).prop('name')).toEqual(customLabelUsername);

      expect(wrapper.find(`input[name="${customLabelPassword}"]`).prop('placeholder')).toEqual(customLabelPassword);
      expect(wrapper.find(`input[name="${customLabelPassword}"]`).prop('id')).toEqual(customLabelPassword);
      expect(wrapper.find(`input[name="${customLabelPassword}"]`).prop('name')).toEqual(customLabelPassword);

      expect(wrapper.find('#recorver-password').text()).toEqual(customRecoverPass);
      expect(wrapper.find('#signup-button').text()).toEqual(customSignup);

      expect(wrapper.find(`input[name="${customSubmit}"]`).prop('value')).toEqual(customSubmit);
      expect(wrapper.find(`input[name="${customSubmit}"]`).prop('id')).toEqual(customSubmit);
      expect(wrapper.find(`input[name="${customSubmit}"]`).prop('name')).toEqual(customSubmit);
    });
  });
});
