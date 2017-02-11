/* global it, expect, describe */

import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './Wrapper';
import Login from './Login';
import Signup from './Signup';

describe('the main wrapper', () => {
  it('renders without crashing', () => {
    shallow(<Wrapper />);
  });

  it('renders the default skeleton', () => {
    const title = <h1>Company Name</h1>;
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders the a custom title', () => {
    const title = 'My Company Name';
    const wrapper = shallow(<Wrapper title={title} />);
    expect(wrapper.html()).toContain(`<h1>${title}</h1>`);
  });

  it('initialize with the default state', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('renders with the login component by default', () => {
    const title = <Login />;
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('render with the signup form if the isLogin equals false', () => {
    const title = <Signup />;
    const wrapper = shallow(<Wrapper isLogin={false} />);
    expect(wrapper.contains(title)).toEqual(true);
  });
});
