/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import RecoverPassword from './RecoverPassword';
import Login from './Login';

describe('the main wrapper', () => {
  const requiredMockProps = {
    handleShowLogin: jest.fn(),
    handleChange: jest.fn(),
    handleRecoverPassword: jest.fn(),
    username: '',
  };
  it('renders without crashing', () => {
    shallow(<RecoverPassword {...requiredMockProps} />);
  });

  it('renders the basic structure', () => {
    const wrapper = shallow(<RecoverPassword {...requiredMockProps} />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
  });
});
