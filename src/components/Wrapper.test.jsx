/* global it, expect, describe */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Wrapper from './Wrapper';
import Login from './Login';
import Signup from './Signup';

describe('the main wrapper', () => {
  it('renders without crashing', () => {
    shallow(<Wrapper />);
  });

  it('renders the default skeleton', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('initialize with the default state', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('renders with the login component by default', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('render with the signup form if the isLogin equals false', () => {
    const wrapper = shallow(<Wrapper isLogin={false} />);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the signup component on the signup button click', () => {
    const wrapper = mount(<Wrapper />);
    wrapper.find('#signup-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(false);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it('show the login component on the login button click on signup', () => {
    const wrapper = mount(<Wrapper isLogin={false} />);
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('show the recover password component on the recover button click', () => {
    const wrapper = mount(<Wrapper />);
    wrapper.find('#recorver-password').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(true);
    expect(wrapper.find('#recovering-password')).toHaveLength(1);
  });

  it('show the login component on the login button click on recover password', () => {
    const wrapper = mount(<Wrapper isRecoveringPassword />);
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
