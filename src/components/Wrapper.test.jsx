/* global it, expect, describe, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Wrapper from './Wrapper';
import Login from './Login';
import Signup from './Signup';

describe('the main wrapper', () => {
  const requiredMockProps = {
    handleSignup: jest.fn(),
    handleLogin: jest.fn(),
    handleRecoverPassword: jest.fn(),
  };
  it('renders without crashing', () => {
    shallow(<Wrapper {...requiredMockProps} />);
  });

  it('renders the default skeleton', () => {
    const wrapper = shallow(<Wrapper {...requiredMockProps} />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('initialize with the default state', () => {
    const wrapper = shallow(<Wrapper {...requiredMockProps} />);
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().passwordConfirmation).toEqual('');
  });

  it('initialize with the required props', () => {
    const dummyFunc = jest.fn();
    const wrapper = shallow(<Wrapper
      handleSignup={dummyFunc}
      handleLogin={dummyFunc}
      handleRecoverPassword={dummyFunc}
    />);
    expect(wrapper.instance().props.handleSignup).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleLogin).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleRecoverPassword).toEqual(dummyFunc);
  });

  it('renders with the login component by default', () => {
    const wrapper = shallow(<Wrapper {...requiredMockProps} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('render with the signup form if the isLogin equals false', () => {
    const wrapper = shallow(<Wrapper isLogin={false} {...requiredMockProps} />);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the signup component on the signup button click', () => {
    const wrapper = mount(<Wrapper {...requiredMockProps} />);
    wrapper.find('#signup-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(false);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the login component on the login button click on signup', () => {
    const wrapper = mount(<Wrapper isLogin={false} {...requiredMockProps} />);
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('show the recover password component on the recover button click', () => {
    const wrapper = mount(<Wrapper {...requiredMockProps} />);
    wrapper.find('#recorver-password').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(true);
    expect(wrapper.find('#recovering-password')).toHaveLength(1);
  });

  it('show the login component on the login button click on recover password', () => {
    const wrapper = mount(<Wrapper isRecoveringPassword {...requiredMockProps} />);
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', () => {
    const signupCallback = jest.fn();
    const wrapper = mount(<Wrapper
      isLogin={false}
      handleSignup={signupCallback}
      handleLogin={jest.fn()}
      handleRecoverPassword={jest.fn()}
    />);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });

  it('should return the username, password and password confirmation on the singup callback', () => {
    const signupCallback = jest.fn();
    const signupValues = {
      username: 'johndoe',
      password: '1234%##D',
      passwordConfirmation: '1234%##D',
    };
    const wrapper = mount(<Wrapper
      isLogin={false}
      handleSignup={signupCallback}
      handleLogin={jest.fn()}
      handleRecoverPassword={jest.fn()}
    />);
    wrapper.setState(signupValues);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls[0][0]).toEqual(signupValues);
  });
});
