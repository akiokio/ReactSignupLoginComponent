/* global it, expect, describe, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactSignupLoginComponent from './ReactSignupLoginComponent';
import Login from './Login';
import Signup from './Signup';

describe('the main wrapper', function () {
  var requiredMockProps = {
    handleSignup: jest.fn(),
    handleLogin: jest.fn(),
    handleRecoverPassword: jest.fn()
  };
  it('renders without crashing', function () {
    shallow(React.createElement(ReactSignupLoginComponent, requiredMockProps));
  });

  it('renders the default skeleton', function () {
    var wrapper = shallow(React.createElement(ReactSignupLoginComponent, requiredMockProps));
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('initialize with the default state', function () {
    var wrapper = shallow(React.createElement(ReactSignupLoginComponent, requiredMockProps));
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().passwordConfirmation).toEqual('');
  });

  it('initialize with the required props', function () {
    var dummyFunc = jest.fn();
    var wrapper = shallow(React.createElement(ReactSignupLoginComponent, {
      handleSignup: dummyFunc,
      handleLogin: dummyFunc,
      handleRecoverPassword: dummyFunc
    }));
    expect(wrapper.instance().props.handleSignup).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleLogin).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleRecoverPassword).toEqual(dummyFunc);
  });

  it('renders with the login component by default', function () {
    var wrapper = shallow(React.createElement(ReactSignupLoginComponent, requiredMockProps));
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('render with the signup form if the isLogin equals false', function () {
    var wrapper = shallow(React.createElement(ReactSignupLoginComponent, Object.assign({ isLogin: false }, requiredMockProps)));
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the signup component on the signup button click', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, requiredMockProps));
    wrapper.find('#signup-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(false);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the login component on the login button click on signup', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, Object.assign({ isLogin: false }, requiredMockProps)));
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('show the recover password component on the recover button click', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, requiredMockProps));
    wrapper.find('#recorver-password').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(true);
    expect(wrapper.find('#recover-password-form')).toHaveLength(1);
  });

  it('show the login component on the login button click on recover password', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, Object.assign({ isRecoveringPassword: true }, requiredMockProps)));
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', function () {
    var signupCallback = jest.fn();
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, {
      isLogin: false,
      handleSignup: signupCallback,
      handleLogin: jest.fn(),
      handleRecoverPassword: jest.fn()
    }));
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });

  it('should call handle login when submit-login clicked', function () {
    var loginCallback = jest.fn();
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, {
      handleSignup: jest.fn(),
      handleLogin: loginCallback,
      handleRecoverPassword: jest.fn()
    }));
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls.length).toEqual(1);
  });

  it('should call handle recover password when submit-recover-password clicked', function () {
    var recoverCallback = jest.fn();
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, {
      isRecoveringPassword: true,
      handleSignup: jest.fn(),
      handleLogin: jest.fn(),
      handleRecoverPassword: recoverCallback
    }));
    wrapper.find('#submit-recover-password').simulate('click');
    expect(recoverCallback.mock.calls.length).toEqual(1);
  });

  it('should attach the login inputs to the state', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, requiredMockProps));
    var usernameInput = wrapper.find('#login-form input[name="username"]');
    usernameInput.instance().value = 'john123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('john123');

    var passwordInput = wrapper.find('#login-form input[name="password"]');
    passwordInput.instance().value = 'themonkeyatethebanana';
    passwordInput.simulate('change', passwordInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebanana');
  });

  it('should attach the signup inputs to the state', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, Object.assign({ isLogin: false }, requiredMockProps)));
    var usernameInput = wrapper.find('#signup-form input[name="username"]');
    usernameInput.instance().value = 'johnSignup123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('johnSignup123');

    var passwordInput = wrapper.find('#signup-form input[name="password"]');
    passwordInput.instance().value = 'themonkeyatethebananaonsignup';
    passwordInput.simulate('change', passwordInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebananaonsignup');

    var passConfirmInput = wrapper.find('#signup-form input[name="passwordConfirmation"]');
    passConfirmInput.instance().value = 'themonkeyatethebananaonsignup';
    passConfirmInput.simulate('change', passConfirmInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebananaonsignup');
  });

  it('should attach the recorver password input to the state', function () {
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, Object.assign({ isRecoveringPassword: true }, requiredMockProps)));
    var usernameInput = wrapper.find('#recover-password-form input[name="username"]');
    usernameInput.instance().value = 'john123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('john123');
  });

  it('should return the username, password and password confirmation on the singup callback', function () {
    var signupCallback = jest.fn();
    var signupValues = {
      username: 'johndoe',
      password: '1234%##D',
      passwordConfirmation: '1234%##D'
    };
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, {
      isLogin: false,
      handleSignup: signupCallback,
      handleLogin: jest.fn(),
      handleRecoverPassword: jest.fn()
    }));
    wrapper.setState(signupValues);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls[0][0]).toEqual(signupValues);
  });

  it('should return the username, password on the login callback', function () {
    var loginCallback = jest.fn();
    var loginValues = {
      username: 'johndoeLog',
      password: '1234%##DLog'
    };
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, {
      handleSignup: jest.fn(),
      handleLogin: loginCallback,
      handleRecoverPassword: jest.fn()
    }));
    wrapper.setState(loginValues);
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls[0][0]).toEqual(loginValues);
  });

  it('should return the username on the recover password callback', function () {
    var recoverPasswordCallback = jest.fn();
    var recoverPasswordValues = {
      username: 'johndoeForgot'
    };
    var wrapper = mount(React.createElement(ReactSignupLoginComponent, {
      isRecoveringPassword: true,
      handleSignup: jest.fn(),
      handleLogin: jest.fn(),
      handleRecoverPassword: recoverPasswordCallback
    }));
    wrapper.setState(recoverPasswordValues);
    wrapper.find('#submit-recover-password').simulate('click');
    expect(recoverPasswordCallback.mock.calls[0][0]).toEqual(recoverPasswordValues);
  });
});