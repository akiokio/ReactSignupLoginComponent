/* global it, expect, describe */

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('the login form', () => {
  const requiredMockProps = {
    handleShowSignup: () => {},
    handleShowRecover: () => {},
    handleChange: () => {},
  };
  it('renders without crashing', () => {
    shallow(<Login {...requiredMockProps} />);
  });

  it('renders the default skeleton', () => {
    const wrapper = shallow(<Login {...requiredMockProps} />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
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
});
