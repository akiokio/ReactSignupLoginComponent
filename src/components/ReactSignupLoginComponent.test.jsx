/* global it, expect, describe, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactSignupLoginComponent from './ReactSignupLoginComponent';
import Login from './Login';
import Signup from './Signup';

describe('the main wrapper', () => {
  const requiredMockProps = {
    handleSignup: jest.fn(),
    handleLogin: jest.fn(),
    handleRecoverPassword: jest.fn(),
  };
  it('renders without crashing', () => {
    shallow(<ReactSignupLoginComponent {...requiredMockProps} />);
  });

  it('renders the default skeleton', () => {
    const wrapper = shallow(<ReactSignupLoginComponent {...requiredMockProps} />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('initialize with the default state', () => {
    const wrapper = shallow(<ReactSignupLoginComponent {...requiredMockProps} />);
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().passwordConfirmation).toEqual('');
  });

  it('initialize with the required props', () => {
    const dummyFunc = jest.fn();
    const wrapper = shallow(<ReactSignupLoginComponent
      handleSignup={dummyFunc}
      handleLogin={dummyFunc}
      handleRecoverPassword={dummyFunc}
    />);
    expect(wrapper.instance().props.handleSignup).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleLogin).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleRecoverPassword).toEqual(dummyFunc);
  });

  it('renders with the login component by default', () => {
    const wrapper = shallow(<ReactSignupLoginComponent {...requiredMockProps} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('render with the signup form if the isLogin equals false', () => {
    const wrapper = shallow(<ReactSignupLoginComponent isLogin={false} {...requiredMockProps} />);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the signup component on the signup button click', () => {
    const wrapper = mount(<ReactSignupLoginComponent {...requiredMockProps} />);
    wrapper.find('#signup-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(false);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the login component on the login button click on signup', () => {
    const wrapper = mount(<ReactSignupLoginComponent isLogin={false} {...requiredMockProps} />);
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('show the recover password component on the recover button click', () => {
    const wrapper = mount(<ReactSignupLoginComponent {...requiredMockProps} />);
    wrapper.find('#recorver-password').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(true);
    expect(wrapper.find('#recover-password-form')).toHaveLength(1);
  });

  it('show the login component on the login button click on recover password', () => {
    const wrapper = mount(<ReactSignupLoginComponent isRecoveringPassword {...requiredMockProps} />);
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', () => {
    const signupCallback = jest.fn();
    const wrapper = mount(<ReactSignupLoginComponent
      isLogin={false}
      handleSignup={signupCallback}
      handleLogin={jest.fn()}
      handleRecoverPassword={jest.fn()}
    />);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });

  it('should call handle login when submit-login clicked', () => {
    const loginCallback = jest.fn();
    const wrapper = mount(<ReactSignupLoginComponent
      handleSignup={jest.fn()}
      handleLogin={loginCallback}
      handleRecoverPassword={jest.fn()}
    />);
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls.length).toEqual(1);
  });

  it('should call handle recover password when submit-recover-password clicked', () => {
    const recoverCallback = jest.fn();
    const wrapper = mount(<ReactSignupLoginComponent
      isRecoveringPassword
      handleSignup={jest.fn()}
      handleLogin={jest.fn()}
      handleRecoverPassword={recoverCallback}
    />);
    wrapper.find('#submit-recover-password').simulate('click');
    expect(recoverCallback.mock.calls.length).toEqual(1);
  });

  it('should attach the login inputs to the state', () => {
    const wrapper = mount(<ReactSignupLoginComponent {...requiredMockProps} />);
    const usernameInput = wrapper.find('#login-form input[name="username"]');
    usernameInput.node.value = 'john123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('john123');

    const passwordInput = wrapper.find('#login-form input[name="password"]');
    passwordInput.node.value = 'themonkeyatethebanana';
    passwordInput.simulate('change', passwordInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebanana');
  });

  it('should attach the signup inputs to the state', () => {
    const wrapper = mount(<ReactSignupLoginComponent isLogin={false} {...requiredMockProps} />);
    const usernameInput = wrapper.find('#signup-form input[name="username"]');
    usernameInput.node.value = 'johnSignup123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('johnSignup123');

    const passwordInput = wrapper.find('#signup-form input[name="password"]');
    passwordInput.node.value = 'themonkeyatethebananaonsignup';
    passwordInput.simulate('change', passwordInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebananaonsignup');

    const passConfirmInput = wrapper.find('#signup-form input[name="passwordConfirmation"]');
    passConfirmInput.node.value = 'themonkeyatethebananaonsignup';
    passConfirmInput.simulate('change', passConfirmInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebananaonsignup');
  });

  it('should attach the recorver password input to the state', () => {
    const wrapper = mount(<ReactSignupLoginComponent isRecoveringPassword {...requiredMockProps} />);
    const usernameInput = wrapper.find('#recover-password-form input[name="username"]');
    usernameInput.node.value = 'john123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('john123');
  });

  it('should return the username, password and password confirmation on the singup callback', () => {
    const signupCallback = jest.fn();
    const signupValues = {
      username: 'johndoe',
      password: '1234%##D',
      passwordConfirmation: '1234%##D',
    };
    const wrapper = mount(<ReactSignupLoginComponent
      isLogin={false}
      handleSignup={signupCallback}
      handleLogin={jest.fn()}
      handleRecoverPassword={jest.fn()}
    />);
    wrapper.setState(signupValues);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls[0][0]).toEqual(signupValues);
  });

  it('should return the username, password on the login callback', () => {
    const loginCallback = jest.fn();
    const loginValues = {
      username: 'johndoeLog',
      password: '1234%##DLog',
    };
    const wrapper = mount(<ReactSignupLoginComponent
      handleSignup={jest.fn()}
      handleLogin={loginCallback}
      handleRecoverPassword={jest.fn()}
    />);
    wrapper.setState(loginValues);
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls[0][0]).toEqual(loginValues);
  });

  it('should return the username on the recover password callback', () => {
    const recoverPasswordCallback = jest.fn();
    const recoverPasswordValues = {
      username: 'johndoeForgot',
    };
    const wrapper = mount(<ReactSignupLoginComponent
      isRecoveringPassword
      handleSignup={jest.fn()}
      handleLogin={jest.fn()}
      handleRecoverPassword={recoverPasswordCallback}
    />);
    wrapper.setState(recoverPasswordValues);
    wrapper.find('#submit-recover-password').simulate('click');
    expect(recoverPasswordCallback.mock.calls[0][0]).toEqual(recoverPasswordValues);
  });
});
